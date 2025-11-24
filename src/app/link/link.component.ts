import { Component, OnInit } from "@angular/core";
import { Link } from "../../crosscommon/entities/Link";
import { LinkService } from "./link.service";
import { NgForm } from "@angular/forms";
import { iEntity } from "src/crosscommon/iEntity";
import { CommonComponent } from "../common/common.component";

import { copyTextToClipboard } from "../common/copy-text";
import { NotificationService } from "../common/notification.service";
import { DateUtils } from "src/crosscommon/DateUtility";
import { Utils } from "src/crosscommon/Utility";
import { computed, signal } from "@angular/core";

@Component({
  selector: "link",
  templateUrl: "./link.template.html",
  styleUrls: ["./link.css"],
  providers: [LinkService],
  standalone: false,
})
export class LinkComponent implements OnInit {
  public viewData: {
    linkList: Link[];
    showItemForm: boolean;
  } = {
    linkList: [],
    showItemForm: false,
  };

  public model: {
    id: string;
  } = {
    id: null,
  };
  public common: CommonComponent<Link> = null;
  public filterApplied: string = "";

  // Batch add UI state
  public showBatchSection: boolean = false;
  public batchTextarea: string = "";

  // Delayed copy state
  public delayedCopyActive: boolean = false;
  public delayedCopyLinks: Link[] = [];
  public delayedCopyIndex: number = 0;
  public delayedCopyTable: { link: Link; copied: boolean }[] = [];
  public delayedCopyTimer: any = null;
  public delayedCopyMinutes: number = 15; // valor por defecto
  public delayedCopySecondsLeft: number = 0;
  public delayedCopyInterval: any = null;

  // para mostrar/ocultar listado principal
  public showMainLinks: boolean = true;

  public pendingLinksCount = signal(0);

  constructor(
    private linkService: LinkService,
    private notificationService: NotificationService
  ) {
    this.common = new CommonComponent<Link>();
  }

  ngOnInit() {
    this.linkService.getAll().then((list) => {
      this.viewData.linkList = list;
      this.updatePendingLinksCount();
    });
  }

  updatePendingLinksCount() {
    this.pendingLinksCount.set(
      this.viewData.linkList.filter((l) => l.lnk_ctg_status === 0).length
    );
  }

  // Toggle batch section
  toggleBatchSection() {
    this.showBatchSection = !this.showBatchSection;
    if (!this.showBatchSection) {
      this.batchTextarea = "";
    }
  }

  // Toggle main links visibility
  toggleMainLinks() {
    this.showMainLinks = !this.showMainLinks;
  }

  // Procesa el textarea y agrega links en batch
  async addLinksBatch() {
    const lines = this.batchTextarea
      .split("\n")
      .map((l) => {
        let url = l.trim();
        // Remueve ',' del final
        if (url.endsWith(",")) {
          url = url.slice(0, -1);
        }
        // Remueve comillas dobles al principio y al final
        if (url.startsWith('"') && url.endsWith('"')) {
          url = url.slice(1, -1);
        }
        // Reemplaza twitter.com por x.com
        url = url.replace(/twitter\.com/g, "x.com");
        return url.trim();
      })
      .filter((l) => !!l);
    const payload: Link[] = [];
    for (const line of lines) {
      let found = this.viewData.linkList.find((l) => l.lnk_url === line);
      if (found) {
        found.lnk_ctg_status = 0;
      } else {
        const now = new Date();
        const newLink = new Link({
          lnk_id: Utils.hashIdForEntity(new Link(), "lnk_id"),
          lnk_url: line,
          lnk_title: line,
          lnk_tags: "rating-0",
          lnk_comment: "",
          lnk_id_user: "mycomplexsoul", // ajusta si tienes el usuario actual
          lnk_date_add: now,
          lnk_date_mod: now,
          lnk_ctg_status: 0,
        });
        this.viewData.linkList.push(newLink);
        payload.push(Utils.entityToRawTableFields(newLink));
      }
    }
    this.updatePendingLinksCount();
    // Solo envía los nuevos links (no los actualizados)
    if (payload.length > 0) {
      try {
        const resp = await this.linkService.newItemsBatch(payload);
        if (resp && resp.success) {
          this.notificationService.notify(resp.message);
        } else {
          this.notificationService.notify(
            resp?.message || "Failed to save links"
          );
        }
      } catch (e) {
        this.notificationService.notify("Failed to save links");
      }
    } else {
      this.notificationService.notify("No new links to add");
    }
    this.batchTextarea = "";
  }

  // Inicia el proceso de copia diferida
  async launchDelayedCopy() {
    if (this.delayedCopyActive) return;
    this.delayedCopyActive = true;
    this.delayedCopyLinks = this.viewData.linkList.filter(
      (l) => l.lnk_ctg_status === 0
    );
    this.delayedCopyIndex = 0;
    this.delayedCopyTable = [];
    this.delayedCopySecondsLeft = this.delayedCopyMinutes * 60;
    if (this.delayedCopyLinks.length === 0) {
      this.notificationService.notify("No links with status 0 to copy");
      this.delayedCopyActive = false;
      return;
    }
    this.updateDelayedCopyTable();
    this.updatePendingLinksCount();

    // Copia inmediatamente el primer link
    await this.copyNextLinkImmediate();

    // Si quedan más links, inicia el timer diferido
    if (this.delayedCopyIndex < this.delayedCopyLinks.length) {
      this.runDelayedCopyTimer();
    } else {
      this.stopDelayedCopy();
      this.notificationService.notify("All links have been copied");
    }
  }

  private async copyNextLinkImmediate() {
    if (this.delayedCopyIndex < this.delayedCopyLinks.length) {
      const link = this.delayedCopyLinks[this.delayedCopyIndex];
      try {
        await copyTextToClipboard(link.lnk_url);
        link.lnk_ctg_status = 1;
        await this.linkService.updateItem(link);
        this.notificationService.notify(`Copied link`);
      } catch (e) {
        this.notificationService.notify(`Failed to copy link`);
      }
      this.delayedCopyIndex++;
      this.updateDelayedCopyTable();
      this.updatePendingLinksCount();
    }
  }

  runDelayedCopyTimer() {
    if (!this.delayedCopyActive) return;
    if (this.delayedCopySecondsLeft > 0) {
      this.delayedCopySecondsLeft--;
      setTimeout(() => this.runDelayedCopyTimer(), 1000);
    } else {
      this.delayedCopyTick();
    }
  }

  // Detiene el proceso de copia diferida
  stopDelayedCopy() {
    this.delayedCopyActive = false;
    // No es necesario limpiar setTimeout, ya que la recursión se detiene por la bandera
  }

  // Timer tick para copia diferida
  async delayedCopyTick() {
    if (!this.delayedCopyActive) return;
    if (this.delayedCopyIndex < this.delayedCopyLinks.length) {
      const link = this.delayedCopyLinks[this.delayedCopyIndex];
      try {
        await copyTextToClipboard(link.lnk_url);
        link.lnk_ctg_status = 1;
        await this.linkService.updateItem(link);
        this.notificationService.notify(`Copied link`);
      } catch (e) {
        this.notificationService.notify(`Failed to copy link`);
      }
      this.delayedCopyIndex++;
      this.updateDelayedCopyTable();
      this.updatePendingLinksCount();
      this.delayedCopySecondsLeft = this.delayedCopyMinutes * 60;
      this.runDelayedCopyTimer();
    } else {
      this.stopDelayedCopy();
      this.notificationService.notify("All links have been copied");
    }
  }

  // Formatea el tiempo restante en mm:ss
  getDelayedCopyTimeLeft(): string {
    const min = Math.floor(this.delayedCopySecondsLeft / 60);
    const sec = this.delayedCopySecondsLeft % 60;
    return `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  }

  // Actualiza la tabla visual de copia diferida
  updateDelayedCopyTable() {
    // Mantén los ya copiados y los siguientes 5 por copiar
    const copied = this.delayedCopyLinks
      .filter((e) => e.lnk_ctg_status === 1)
      .map((e) => ({ link: e, copied: true }));
    const next = this.delayedCopyLinks
      .filter((e) => e.lnk_ctg_status !== 1)
      .map((e) => ({ link: e, copied: false }))
      .slice(0, 5);
    this.delayedCopyTable = [...copied, ...next];
  }

  newItem(form: NgForm) {
    if (this.model.id) {
      // edit item
      this.common.updateItem({
        form,
        model: this.model,
        listing: this.viewData.linkList,
        onFindExpression: (item) => this.findById(item, this.model.id),
        onAssignForEdit: (item, formValues) => {
          const newItem = new Link(item);
          newItem.lnk_url = formValues.fUrl;
          newItem.lnk_title = formValues.fTitle;
          newItem.lnk_tags = formValues.fTags;
          newItem.lnk_comment = formValues.fComment;

          return newItem;
        },
        onUpdateItemService: (item) => this.linkService.updateItem(item),
        onFinalExecution: () => {
          this.model.id = null;
        },
      });
    } else {
      // new item
      this.common.newItem({
        form,
        listing: this.viewData.linkList,
        onFindExpression: (item, newItem) =>
          this.findById(item, newItem.lnk_id),
        onAssignForCreate: (formValues) => {
          const newItem = new Link({
            lnk_url: formValues.fUrl,
            lnk_title: formValues.fTitle,
            lnk_tags: formValues.fTags,
            lnk_comment: formValues.fComment,
          });
          return newItem;
        },
        onNewItemService: (item) => this.linkService.newItem(item),
        onFinalExecution: () => {
          this.viewData.showItemForm = false;
        },
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

    model = this.viewData.linkList.find((item) => this.findById(item, id));
    this.model.id = model["lnk_id"]; // to tell the form that this is an edition

    setTimeout(() => {
      form.controls["fUrl"].setValue(model["lnk_url"]);
      form.controls["fTitle"].setValue(model["lnk_title"]);
      form.controls["fTags"].setValue(model["lnk_tags"]);
      form.controls["fComment"].setValue(model["lnk_comment"]);
    }, 0);
  }

  findById(item: Link, id: string) {
    return item.lnk_id === id;
  }

  criteriaForFilter = (item: Link, query: string) =>
    item.lnk_url.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
    item.lnk_title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
    item.lnk_tags.toLowerCase().indexOf(query.toLowerCase()) !== -1;

  sort(a: Link, b: Link) {
    return a.lnk_date_mod.getTime() >= b.lnk_date_mod.getTime() ? 1 : -1;
  }

  filter(event: KeyboardEvent) {
    const query: string = event.target["value"];

    this.filterApplied = query;
    if (query) {
      this.viewData.linkList = this.linkService
        .list()
        .filter((i) => this.criteriaForFilter(i, this.filterApplied));
    } else {
      this.viewData.linkList = this.linkService.list().sort(this.sort);
    }
  }

  copyAndUpdateItem(item: Link) {
    copyTextToClipboard(item.lnk_url)
      .then(() => {
        // update date_mod
        this.common.updateItem({
          form: { value: null },
          model: item,
          listing: this.viewData.linkList,
          onFindExpression: (e) => this.findById(e, item.lnk_id),
          onAssignForEdit: (e) => {
            const newItem = new Link(e);
            newItem.lnk_date_mod = DateUtils.newDateUpToSeconds();

            return newItem;
          },
          onUpdateItemService: (e) => this.linkService.updateItem(e),
          onFinalExecution: () => {
            this.notificationService.notify("Copied url to clipboard");
          },
        });
      })
      .catch((error) => {
        this.notificationService.notify(
          `Error trying to copy url to clipboard: ${error}`
        );
      });
  }

  // Copia un link pendiente de la tabla de manera inmediata
  async copyLinkNow(link: Link) {
    if (link.lnk_ctg_status === 1) return;
    try {
      await copyTextToClipboard(link.lnk_url);
      link.lnk_ctg_status = 1;
      await this.linkService.updateItem(link);
      this.notificationService.notify(`Copied link`);
      // Si el link copiado es el siguiente en la cola, avanza el índice y resetea el timer
      if (
        this.delayedCopyLinks[this.delayedCopyIndex] &&
        this.delayedCopyLinks[this.delayedCopyIndex].lnk_id === link.lnk_id
      ) {
        this.delayedCopyIndex++;
        this.delayedCopySecondsLeft = this.delayedCopyMinutes * 60;
      }
      this.updateDelayedCopyTable();
      this.updatePendingLinksCount();
      // Si ya no hay más pendientes, detén el proceso
      if (this.delayedCopyIndex >= this.delayedCopyLinks.length) {
        this.stopDelayedCopy();
        this.notificationService.notify("All links have been copied");
      }
    } catch (e) {
      this.notificationService.notify(`Failed to copy link`);
    }
  }
}
