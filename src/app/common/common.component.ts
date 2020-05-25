import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";
import { Utils } from "src/crosscommon/Utility";

export class CommonComponent<T> {
  newItem({
    form,
    listing,
    onFindExpression,
    onAssignForCreate,
    onNewItemService,
    onFinalExecution
  }: {
    form: NgForm;
    listing: T[];
    onFindExpression: (item: T, newItem: T) => boolean;
    onAssignForCreate: (formValues: any) => T;
    onNewItemService: (item: T) => Promise<T>;
    onFinalExecution: (item: T) => void;
  }): void {
    const formValues = form.value;

    // new item
    const item: T = onAssignForCreate(formValues);
    onNewItemService(item).then(item => {
      const listItem = listing.find(e => onFindExpression(e, item));
      if (listItem) {
        listItem["isNew"] = true;
      } else {
        listing.push(item);
      }
    });

    onFinalExecution(item);
  }

  updateItem({
    form,
    model,
    listing,
    onFindExpression,
    onAssignForEdit,
    onUpdateItemService,
    onFinalExecution
  }: {
    form: NgForm;
    model: any; // model
    listing: T[];
    onFindExpression: (item: T) => boolean;
    onAssignForEdit: (item: T, formValues: any) => T;
    onUpdateItemService: (item: T) => void;
    onFinalExecution: (item: T) => void;
  }): void {
    const formValues = form.value;

    // edit
    const existingIndex: number = listing.findIndex(onFindExpression);
    const item: T = listing[existingIndex];

    const edited = onAssignForEdit(item, formValues);
    onUpdateItemService(edited);
    edited["isEdited"] = true; // flag to render as edited on UI
    listing[existingIndex] = edited;
    onFinalExecution(edited);
  }

  resetForm(form: NgForm, onReset: (form: NgForm) => void) {
    onReset(form);
    form.reset();
  }

  /**
   * Another to calculate ids with generics, right now not in use because it exists Utils.hashIdForEntity()
   * which does the same as this.
   * @deprecated in favor of Utils.hashIdForEntity()
   * @param type
   * @param fieldName
   */
  newId<R extends iEntity>(type: { new (): R }, fieldName: string): string {
    const m: iEntity = new type();
    const length: number = m.metadata.fields.find(f => f.dbName === fieldName)
      .size;
    return Utils.hashId(m.metadata.prefix, length);
  }
}
