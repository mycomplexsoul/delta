import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SyncAPI } from "../common/sync.api";
import { Task } from "../../crosscommon/entities/Task";
import { TaskTimeTracking } from "../../crosscommon/entities/TaskTimeTracking";
import { DateCommon } from "../common/date.common";
import { TaskIndicator } from "./task.indicator.service";

interface TaskReportItem extends Task {
  tsk_time_history: TaskTimeTracking[];
}

@Component({
  selector: "tasks-report",
  templateUrl: "./TasksReport.template.html",
  styleUrls: ["./TasksReport.css"],
  providers: [TaskIndicator],
  standalone: false,
})
export class TasksReportComponent implements OnInit {
  public tasks: TaskReportItem[] = [];
  public selectedDate: string;
  public minDate: string;
  public maxDate: string;
  public chartMinWidth = 0;
  public isLoading = true;
  public loadError: string;
  private indicatorTasks: TaskReportItem[] = [];
  private indicatorDataLoaded = false;
  public readonly taskOptions = {
    optAllowToEditETA: false,
    optViewElapsedDays: false,
    optShowRecordNameInline: true,
    optShowBadgeIfTaskIsInBacklog: false,
    optShowTimeTrackingHistory: true,
    optShowDetailsButton: false,
  };
  public readonly taskViewHandlers = {
    onTaskMarkAsDone: (_task: Task, event: Event) => event.preventDefault(),
    onTimeTrackingQuickEdit: () => {},
    onToggleTimeMode: () => {},
    onTaskEdit: () => {},
    onTaskBlur: () => {},
    onTaskFocus: () => {},
    onTaskKeyDown: () => {},
    onTaskEditEstimatedDuration: () => {},
    onTaskEditEtaKeyDown: () => {},
    onShowTagStats: () => {},
  };
  public allOpenCountChart: {
    chartData: any[];
    chartLabels: string[];
    chartOptions: any;
    chartLegend: boolean;
    chartType: string;
  } = {
    chartData: [{ data: [] }],
    chartLabels: [],
    chartOptions: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "Open tasks",
          },
        },
        x: {
          title: {
            display: true,
            text: "Day",
          },
          ticks: {
            autoSkip: false,
            minRotation: 90,
            maxRotation: 90,
          },
        },
      },
      plugins: {
        legend: {
          display: true,
        },
        tooltip: {
          enabled: true,
        },
        datalabels: {
          display: true,
          align: "top",
          anchor: "end",
          formatter: (value: number, context: any) => {
            const data = context.chart.data.datasets[0].data;
            const index = context.dataIndex;
            if (index === 0) {
              return `${value}`;
            }
            const previousValue = data[index - 1];
            const diff = value - previousValue;
            const sign = diff >= 0 ? "+" : "";
            return `${value} (${sign}${diff})`;
          },
          color: "#333",
          font: {
            weight: "bold",
          },
        },
      },
    },
    chartLegend: true,
    chartType: "line",
  };

  constructor(
    private sync: SyncAPI,
    private titleService: Title,
    private taskIndicator: TaskIndicator,
    private dateUtils: DateCommon,
    private changeDetector: ChangeDetectorRef
  ) {
    this.titleService.setTitle("Tasks Report");
  }

  ngOnInit(): void {
    const today = this.startOfDay(new Date());
    this.minDate = this.toDateInputValue(this.addDays(today, -60));
    this.maxDate = this.toDateInputValue(today);
    this.selectedDate = this.toDateInputValue(this.addDays(today, -1));

    this.sync
      .get("/api/tasks/finished-report")
      .then((response) => {
        const timeTrackingByTask = new Map<string, TaskTimeTracking[]>();
        response.timetracking.forEach((entry: any) => {
          const timeTracking = new TaskTimeTracking(entry);
          const history = timeTrackingByTask.get(timeTracking.tsh_id) || [];
          history.push(timeTracking);
          timeTrackingByTask.set(timeTracking.tsh_id, history);
        });

        this.indicatorTasks = response.tasks.map((data: any): TaskReportItem => {
          const task = new Task(data) as TaskReportItem;
          task.tsk_time_history = (
            timeTrackingByTask.get(task.tsk_id) || []
          ).sort((a, b) => b.tsh_num_secuential - a.tsh_num_secuential);
          return task;
        });
        this.indicatorDataLoaded = true;
        this.tasks = this.indicatorTasks
          .filter(
            (task: TaskReportItem) =>
              task.tsk_ctg_status === 3 && !!this.taskDateKey(task)
          )
          .sort(
            (a: TaskReportItem, b: TaskReportItem) =>
              new Date(b.tsk_date_done).getTime() -
              new Date(a.tsk_date_done).getTime()
          );

        const latestCompletion = this.tasks.reduce(
          (latest, task) =>
            this.taskDateKey(task) > latest ? this.taskDateKey(task) : latest,
          this.maxDate
        );
        this.maxDate = latestCompletion > this.maxDate
          ? latestCompletion
          : this.maxDate;
        this.taskIndicator.tasks = this.indicatorTasks;
        this.updateAllOpenCountChart();
        this.isLoading = false;
        this.changeDetector.detectChanges();
      })
      .catch((error) => {
        console.error("[TasksReportComponent] Failed to load report", error);
        this.loadError = "Unable to load the finished tasks report.";
        this.isLoading = false;
        this.changeDetector.detectChanges();
      });
  }

  get selectedTasks(): TaskReportItem[] {
    return this.tasks.filter(
      (task) => this.taskDateKey(task) === this.selectedDate
    );
  }

  @HostListener("window:resize")
  onWindowResize(): void {
    if (this.indicatorDataLoaded) {
      this.updateAllOpenCountChart();
    }
  }

  private updateAllOpenCountChart(): void {
    const today = this.dateUtils.dateOnly();
    const todayKey = this.toDateInputValue(today);
    const daysBack =
      typeof window !== "undefined" && window.innerWidth < 512 ? 10 : 60;
    const lastDayKey = this.indicatorTasks.reduce(
      (latest, task) => {
        const completionDate = this.taskDateKey(task);
        return completionDate > latest ? completionDate : latest;
      },
      todayKey
    );
    const firstDay = new Date(today);
    firstDay.setDate(firstDay.getDate() - daysBack);
    const lastDay = this.dateFromInputValue(lastDayKey);
    const days: Date[] = [];
    const labels: string[] = [];

    for (let day = firstDay; day <= lastDay; day = this.nextDay(day)) {
      days.push(day);
      labels.push(this.toDateInputValue(day));
    }

    this.chartMinWidth = Math.max(512, days.length * 24);
    const values = days.map((day) =>
      this.taskIndicator.allOpenTaskCountUntil(day, this.nextDay(day))
    );
    this.allOpenCountChart.chartLabels = labels;
    this.allOpenCountChart.chartData = [
      {
        label: "All Open Count",
        data: values,
        fill: false,
        borderColor: "#3f51b5",
        backgroundColor: "rgba(63, 81, 181, 0.2)",
        tension: 0.2,
      },
    ];
  }

  private nextDay(date: Date): Date {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  }

  private dateFromInputValue(value: string): Date {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  private taskDateKey(task: TaskReportItem): string {
    if (!task.tsk_date_done) {
      return "";
    }

    const date = new Date(task.tsk_date_done);
    return Number.isNaN(date.getTime()) ? "" : this.toDateInputValue(date);
  }

  private startOfDay(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  private toDateInputValue(date: Date): string {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDate()}`.padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
}
