import { Component, OnInit, Renderer2 } from "@angular/core";
import { Category } from "../../crosscommon/entities/Category";
import { CategoryService } from "./category.service";
import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";
import { CommonComponent } from "../common/common.component";
import { MovementService } from "./movement.service";
import { Movement } from "../../crosscommon/entities/Movement";
import { NotificationService } from "../common/notification.service";
import { requestResult } from "../common/requestResult";

@Component({
  selector: "category",
  templateUrl: "./category.template.html",
  providers: [CategoryService, MovementService]
})
export class CategoryComponent implements OnInit {
  public viewData: {
    categoryList: Category[];
    movementList: Movement[];
    showItemForm: boolean;
    replaceCategoryList: Category[];
    selectedCategory: Category;
  } = {
    categoryList: [],
    movementList: [],
    showItemForm: false,
    replaceCategoryList: [],
    selectedCategory: null
  };

  public model: {
    id: string;
  } = {
    id: null
  };
  public replaceCategoryId: string = null;
  public common: CommonComponent<Category> = null;

  constructor(
    private categoryService: CategoryService,
    private movementService: MovementService,
    private notificationService: NotificationService,
  ) {
    this.common = new CommonComponent<Category>();
  }

  ngOnInit() {
    Promise.all([
      this.categoryService.getAll(),
      this.movementService.getAll()
    ]).then(([categoryList, movementList]: [Category[], Movement[]]) => {
      this.viewData.movementList = movementList;

      this.viewData.categoryList = categoryList.map(category => {
        category["movementList"] = this.addAdditionalDataToItem(
          category,
          movementList
        );
        return category;
      });
    });
  }

  addAdditionalDataToItem(item: Category, movementList: Movement[]) {
    return movementList.filter(
      ({ mov_id_category }) => mov_id_category === item.mct_id
    );
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common.updateItem({
        form,
        model: this.model,
        listing: this.viewData.categoryList,
        onFindExpression: item => item.mct_id === this.model.id,
        onAssignForEdit: (item, formValues) => {
          const newItem = new Category(item);
          newItem.mct_name = formValues.fName;
          return newItem;
        },
        onUpdateItemService: item =>
          this.categoryService.updateItem(item).then(item => {
            item["movementList"] = this.addAdditionalDataToItem(
              item,
              this.viewData.movementList
            );
            return item;
          }),
        onFinalExecution: () => {
          this.model.id = null;
        }
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.categoryList,
        onFindExpression: (item, newItem) => item.mct_id === newItem.mct_id,
        onAssignForCreate: formValues => {
          const newItem = new Category({
            mct_name: formValues.fName
          });
          return newItem;
        },
        onNewItemService: item => this.categoryService.newItem(item),
        onFinalExecution: () => {
          this.viewData.showItemForm = false;
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

  setModelDetails(id: string, form: NgForm) {
    let model: iEntity;
    if (!this.viewData.showItemForm) {
      this.viewData.showItemForm = !this.viewData.showItemForm;
    }

    this.viewData.selectedCategory = this.viewData.categoryList.find(e => e.mct_id === id);
    model = this.viewData.selectedCategory;
    
    this.model.id = model["mct_id"]; // to tell the form that this is an edition

    // fill replacement categories
    this.viewData.replaceCategoryList = this.viewData.categoryList.filter(c => 
      c.mct_id !== id
    );

    setTimeout(() => {
      form.controls["fName"].setValue(model["mct_name"]);
    }, 0);
  }

  async applyCategoryReplacement(oldCategoryId: string, newCategoryId: string) {
    const oldCat = this.viewData.categoryList.find(c => c.mct_id === oldCategoryId);
    const newCat = this.viewData.categoryList.find(c => c.mct_id === newCategoryId);

    const response = await this.categoryService.replaceCategory(oldCategoryId, newCategoryId);

    if (response.success) {
      // success applying changes in server, now update client side data
      oldCat['movementList'].forEach((mov: Movement) => {
        mov.mov_id_category = newCategoryId;
        mov.mov_txt_category = newCat.mct_name;

        newCat['movementList'].push(mov);
      });

      oldCat['movementList'] = [];
    }

    // notify user of processing result
    this.notificationService.notify(response.message);
  }

  async deleteItem(categoryId: string) {
    const item: Category = this.viewData.categoryList.find(e => e.mct_id === categoryId);
    const result: requestResult = await this.categoryService.deleteItem(item);
    
    if (result.success) {
      const itemIndex = this.viewData.categoryList.findIndex(e => e.mct_id === categoryId);
      this.viewData.categoryList.splice(itemIndex, 1);
      this.notificationService.notify('Category deleted successfully');
      this.viewData.selectedCategory = null;
    } else {
      console.log(result.errors, 'Error deleting category');
      this.notificationService.notify(result.message);
    }
  }
}
