import { Component, OnInit } from "@angular/core";
import { Activity } from "../../crosscommon/entities/Activity";
import { ActivityService } from "./activity.service";
import { KeyvalService } from "./keyval.service";
import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";
import { CommonComponent } from "../common/common.component";
import { DateUtils } from "src/crosscommon/DateUtility";
import { TimelineService } from "../common/TimelineService";
import { Timeline } from "src/crosscommon/entities/Timeline";
import { Keyval } from "src/crosscommon/entities/Keyval";
import { TasksCore } from "../task/tasks.core";
import { Task } from "src/crosscommon/entities/Task";
import { NotificationService } from "../common/notification.service";

@Component({
  selector: "activity",
  templateUrl: "./activity.template.html",
  styleUrls: ["./activity.css"],
  providers: [ActivityService, TimelineService, KeyvalService]
})
export class ActivityComponent implements OnInit {
  public viewData: {
    activityList: Activity[];
    showItemForm: boolean;
    timelineList: Timeline[];
    timelineKey: string;
    keyvalList: Keyval[]
  } = {
    activityList: [],
    showItemForm: false,
    timelineList: [],
    timelineKey: "activity|",
    keyvalList: []
  };

  public model: {
    id: string;
    keyval: Keyval[];
    tasks: Task[]
  } = {
    id: null,
    keyval: [],
    tasks: []
  };
  public common: CommonComponent<Activity> = null;
  
  // handlers for TaskComponent
  public handlers = {
    
  };

  constructor(
    private activityService: ActivityService,
    private timelineService: TimelineService,
    private keyvalService: KeyvalService,
    private tasksService: TasksCore,
    private notificationService: NotificationService,
  ) {
    this.common = new CommonComponent<Activity>();
  }

  ngOnInit() {
    this.activityService.getAll().then(list => {
      this.viewData.activityList = list;
    });
    // TODO: Get only keyval for open activities
    this.keyvalService.getAll().then(list => {
      this.viewData.keyvalList = list;
    });
    // TODO: Get all tasks
    this.tasksService.getTasks().then((tasks: Task[]) => {
      this.viewData.activityList.forEach(a => {
        const tagTasks = tasks.filter(t => t.tsk_tags && t.tsk_tags.includes(a.act_tasks_tag));
        
        a['additional'] = {
          tasks: tagTasks.sort(this.sortTasks),
        };
      });


    });
  }

  toggleShowItemForm() {
    if (this.viewData.showItemForm) {
      this.model.id = null;
    }
    this.viewData.showItemForm = !this.viewData.showItemForm;
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common.updateItem({
        form,
        model: this.model,
        listing: this.viewData.activityList,
        onFindExpression: item => this.findById(item, "act_id", this.model.id),
        onAssignForEdit: (item, formValues) => {
          const newItem = new Activity(item);

          // newItem.act_id_project = formValues.fProjectId;
          newItem.act_name = formValues.fName;
          // newItem.act_description = formValues.fDescription;
          newItem.act_tags = formValues.fTags;
          newItem.act_tasks_tag = formValues.fTasksTag;
          // newItem.act_close_comment = formValues.fCloseComment;
          // newItem.act_ctg_status = formValues.fCtgStatus;

          return newItem;
        },
        onUpdateItemService: item => this.activityService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        }
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.activityList,
        onFindExpression: (item, newItem) =>
          this.findById(item, "act_id", newItem.act_id),
        onAssignForCreate: formValues => {
          const newItem = new Activity({
            act_id_project: formValues.fProjectId || "0",
            act_name: formValues.fName,
            act_description: formValues.fDescription || null,
            act_tags: formValues.fTags || null,
            act_tasks_tag: formValues.fTasksTag || null,
            act_close_comment: formValues.fCloseComment || null,
            act_ctg_status: formValues.fCtgStatus || "1"
          });
          return newItem;
        },
        onNewItemService: item => {
          // augment with Keyval info
          item["keyvalItems"] = {
            ACT_DATE_REQUESTED: DateUtils.formatDate(
              DateUtils.newDateUpToSeconds()
            )
          };

          return this.activityService.newItem(item);
        },
        onFinalExecution: () => {
          this.viewData.showItemForm = false;
          this.model.id = null;
        }
      });
    }

    this.common.resetForm(form, () => {
      this.model.id = null;
    });
    this.viewData.showItemForm = false;
  }

  resetForm(form: NgForm) {
    this.model.id = null;
    form.reset();
  }

  sortTasks(a: Task, b: Task) {
    if (a.tsk_date_done) {
      if (b.tsk_date_done) {
        if (a.tsk_date_done.getTime() > b.tsk_date_done.getTime()) {
          return 1;
        }
        if (a.tsk_date_done.getTime() < b.tsk_date_done.getTime()) {
          return -1;
        }
        if (a.tsk_date_done.getTime() === b.tsk_date_done.getTime()) {
          return 0;
        }
      } else {
        // a is finished => goes first, b is open => goes last
        return -1;
      }
    } else {
      if (b.tsk_date_done) {
        // a is open => goes last, b is finished => goes first
        return 1;
      } else {
        // a and b are open, order by task order
        if (a.tsk_order > b.tsk_order) {
          return 1;
        }
        if (a.tsk_order < b.tsk_order) {
          return -1;
        }
        if (a.tsk_order === b.tsk_order) {
          return 0;
        }
      }
    }
  }

  setModelDetails(id: string, form: NgForm) {
    let model: Activity;
    if (!this.viewData.showItemForm) {
      this.viewData.showItemForm = !this.viewData.showItemForm;
    }

    // Set activity
    model = this.viewData.activityList.find(item => this.findById(item, "act_id", id));
    this.model.id = model["act_id"]; // to tell the form that this is an edition

    // Get Timeline
    this.timelineService
      .getTimeline(this.viewData.timelineKey + this.model.id)
      .then(({ timeline }) => {
        this.viewData.timelineList = timeline;
      });

    // Fill form
    setTimeout(() => {
      // form.controls["fProjectId"].setValue(model["act_id_project"]);
      form.controls["fName"].setValue(model["act_name"]);
      // form.controls["fDescription"].setValue(model["act_description"]);
      form.controls["fTags"].setValue(model["act_tags"]);
      form.controls["fTasksTag"].setValue(model["act_tasks_tag"]);
      // form.controls["fCloseComment"].setValue(model["act_close_comment"]);
      // form.controls["fCtgStatus"].setValue(model["act_ctg_status"]);
    }, 0);

    // Get Keyval
    this.model.keyval = this.viewData.keyvalList.filter(item => this.findById(item, "key_id", id));

    // get tasks
    if (model.act_tasks_tag) {
      this.tasksService.getTasks().then((tasks: Task[]) => {
        const tagTasks = tasks.filter(t => t.tsk_tags && t.tsk_tags.includes(model.act_tasks_tag));
  
        this.model.tasks = tagTasks.sort(this.sortTasks);

        model['additional'] = {
          tasks: this.model.tasks,
        };
      });
    }
  }

  findById(item: iEntity, field: string, id: string) {
    return item[field] === id;
  }

  changeStatus(id: string, status: string): void {
    const ALL_STATUS = ['CAPTURED', 'BACKLOG', 'OPEN', 'IN-PROGRESS', 'VERIFICATION', 'CLOSED'];

    if(!id) {
      throw new Error('id should not be empty');
    }
    
    const item: Activity = this.viewData.activityList.find(({ act_id }) => act_id === id);
    
    if (!item) {
      throw new Error('Activity not found');
    }

    if (ALL_STATUS.includes(status)) {
      item.act_ctg_status = ALL_STATUS.indexOf(status) + 1;
      item.act_date_mod = DateUtils.newDateUpToSeconds();

      // augment with Keyval info
      item["keyvalItems"] = {
        ACT_DATE_CLOSED: DateUtils.formatDate(
          DateUtils.newDateUpToSeconds()
        )
      };

      this.activityService.updateItem(item).then(response => {
        this.notificationService.notifyWithOptions('Activity was closed successfuly', {
          title: 'Activities'
        });
      });
    }
  }
}
