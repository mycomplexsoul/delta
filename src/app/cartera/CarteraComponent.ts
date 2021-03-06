import { Component, OnInit } from "@angular/core";
import { CarteraService } from "./CarteraService";
import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { DateUtils } from "src/crosscommon/DateUtility";
import { Title } from "@angular/platform-browser";
import { NgForm } from "@angular/forms";
import { NotificationService } from "../common/notification.service";
import { Utils } from "src/crosscommon/Utility";

const CUOTA_NORMAL = "cuota-normal";
const PROVISION_AMOUNT = 1480;
const UNIT_LIST: string[] | number[] = [
  101,
  102,
  103,
  104,
  201,
  202,
  203,
  204,
  301,
  302,
  303,
  304,
  401,
  402,
  403,
  404,
  501,
  502,
  503,
  504,
];

@Component({
  selector: "cartera",
  templateUrl: "./Cartera.html",
  styleUrls: ["./Cartera.css"],
  providers: [CarteraService],
})
export class CarteraComponent implements OnInit {
  public viewData: {
    showItemForm: boolean;
    showPayDetList: boolean;
    showPayDetListAfterPayment: boolean;
    payDetCaptureStatus: string;
    payDetCaptureTotal: number;
    payDetFolioCaptureStatus: string;
    unitList: Array<string> | Array<number>;
    unitPendingProvisionList: CarteraProvision[];
    unitPendingProvisionListAfterPayment: CarteraProvision[];
    pendingProvisionList: CarteraProvision[];
    futureProvisionList: CarteraProvision[];
    pendingTotalAmount: number;
    pendingTotalPayed: number;
    pendingTotalRemaining: number;
    pendingTotals: Array<{ unit: string; remaining: number }>;
    totalRemainingFromPendingTotals: number;
    futureTotalAmount: number;
    futureTotalPayed: number;
    futureTotalRemaining: number;
    year: number;
    month: number;
    nonIdentifiedPaymentList: CarteraPayment[];
    nonIdentifiedTotalAmount: number;
    displayYearMonth: string;
    showOnlyUnitsWithoutPayment: boolean;
  } = {
    showItemForm: false,
    showPayDetList: false,
    showPayDetListAfterPayment: false,
    payDetCaptureStatus: null,
    payDetCaptureTotal: 0,
    payDetFolioCaptureStatus: null,
    unitList: UNIT_LIST,
    unitPendingProvisionList: [],
    unitPendingProvisionListAfterPayment: [],
    pendingProvisionList: [],
    futureProvisionList: [],
    pendingTotalAmount: 0,
    pendingTotalPayed: 0,
    pendingTotalRemaining: 0,
    pendingTotals: [],
    totalRemainingFromPendingTotals: 0,
    futureTotalAmount: 0,
    futureTotalPayed: 0,
    futureTotalRemaining: 0,
    year: 0,
    month: 0,
    nonIdentifiedPaymentList: [],
    nonIdentifiedTotalAmount: 0,
    displayYearMonth: null,
    showOnlyUnitsWithoutPayment: false,
  };
  private model: {
    _paymentType: string;
    _dateType: string;
    fDate: string;
    fAmount: number;
    unitId: string;
    fDescription: string;
    paymentId: string;
  } = {
    _paymentType: "normal",
    _dateType: "current",
    fDate: DateUtils.formatDate(DateUtils.newDateUpToSeconds()),
    fAmount: 0,
    unitId: null,
    fDescription: null,
    paymentId: null,
  };
  private payDetModel: any = {};
  private payDetFolioModel: any = {};
  private lastFolio: number = 0;

  parseQueryString() {
    const date = new Date();

    this.viewData.year = date.getFullYear();
    this.viewData.month = date.getMonth() + 1;
    this.viewData.displayYearMonth = `${DateUtils.getMonthNameSpanish(
      this.viewData.month
    )} ${this.viewData.year}`;
  }

  constructor(
    private carteraService: CarteraService,
    private notificationService: NotificationService,
    private titleService: Title
  ) {
    this.parseQueryString();
    titleService.setTitle("Cartera");
  }

  ngOnInit() {
    this.deriveState();
  }

  sumByField<T>(list: T[], fieldName: string): number {
    return list.reduce(
      (previous: number, current: T) => previous + current[fieldName],
      0
    );
  }

  deriveState() {
    this.carteraService
      .getPendingProvisionForMonth(this.viewData.year, this.viewData.month)
      .then((response) => {
        const {
          pendingProvisionList,
          futureProvisionList,
          nonIdentifiedPaymentList,
          lastFolio,
        } = response;

        this.viewData.pendingProvisionList = pendingProvisionList;
        this.viewData.futureProvisionList = futureProvisionList;
        this.viewData.nonIdentifiedPaymentList = nonIdentifiedPaymentList;
        this.lastFolio = lastFolio;

        this.toggleUnitList();

        // calculate totals
        this.viewData.pendingTotalAmount = this.sumByField(
          pendingProvisionList,
          "cpr_amount"
        );
        this.viewData.pendingTotalPayed = this.sumByField(
          pendingProvisionList,
          "cpr_payed"
        );
        this.viewData.pendingTotalRemaining = this.sumByField(
          pendingProvisionList,
          "cpr_remaining"
        );

        this.viewData.futureTotalAmount = this.sumByField(
          futureProvisionList,
          "cpr_amount"
        );
        this.viewData.futureTotalPayed = this.sumByField(
          futureProvisionList,
          "cpr_payed"
        );
        this.viewData.futureTotalRemaining = this.sumByField(
          futureProvisionList,
          "cpr_remaining"
        );

        // totals per unit
        this.viewData.pendingTotals = this.viewData.pendingProvisionList.reduce(
          (previous, current) => {
            const found = previous.find((e) => e.unit === current.cpr_id_unit);
            // the ones that are normal provisions and that doesn't have any payments
            const isNormalProvision =
              current.cpr_code_reference.split("|")[0] === CUOTA_NORMAL &&
              current.cpr_remaining === PROVISION_AMOUNT;

            if (found) {
              found.remaining += current.cpr_remaining;
              found.normalProvisionCount += isNormalProvision ? 1 : 0;
            } else {
              previous.push({
                unit: current.cpr_id_unit,
                remaining: current.cpr_remaining,
                normalProvisionCount: isNormalProvision ? 1 : 0,
              });
            }
            return previous;
          },
          []
        );
        // total from pendingTotals
        this.viewData.totalRemainingFromPendingTotals = this.sumByField(
          this.viewData.pendingTotals,
          "remaining"
        );

        // total from nonIdentified
        this.viewData.nonIdentifiedTotalAmount = this.sumByField(
          nonIdentifiedPaymentList,
          "cpy_amount"
        );
      });
  }

  getProvisionYearMonth(provision: CarteraProvision): number[] {
    return provision.cpr_code_reference
      .split("|")[1]
      .split("-")
      .map((n) => parseInt(n, 10));
  }

  isProvisionForCurrentRenderedMonth(
    provision: CarteraProvision,
    year: number,
    month: number
  ) {
    return (
      this.getProvisionYearMonth(provision).reduce(
        (previous, current) => previous * 100 + current,
        0
      ) ===
      year * 100 + month
    );
  }

  setUnitProvisionList(unitId: string) {
    this.viewData.showPayDetList = !this.viewData.showPayDetList;
    this.viewData.unitPendingProvisionList = this.viewData.pendingProvisionList.filter(
      (e) => e.cpr_id_unit === unitId
    );

    if (this.viewData.unitPendingProvisionList.length === 0) {
      this.viewData.unitPendingProvisionList = this.viewData.futureProvisionList.filter(
        (e) => e.cpr_id_unit === unitId
      );
    }

    // totals
    this.viewData.pendingTotalAmount = this.sumByField(
      this.viewData.unitPendingProvisionList,
      "cpr_amount"
    );
    this.viewData.pendingTotalPayed = this.sumByField(
      this.viewData.unitPendingProvisionList,
      "cpr_payed"
    );
    this.viewData.pendingTotalRemaining = this.sumByField(
      this.viewData.unitPendingProvisionList,
      "cpr_remaining"
    );
  }

  setPayDetAmount(provision: CarteraProvision) {
    this.payDetModel[provision.cpr_id] =
      provision.cpr_remaining <
      this.model.fAmount - this.viewData.payDetCaptureTotal
        ? provision.cpr_remaining
        : this.model.fAmount - this.viewData.payDetCaptureTotal;

    // if payment is complete for this provision, generate folio
    if (this.payDetModel[provision.cpr_id] === provision.cpr_remaining) {
      const date = DateUtils.stringDateToDate(this.model.fDate);
      let next = this.nextFolioAvailable(
        this.viewData.pendingProvisionList,
        date
      );

      if (next <= this.lastFolio) {
        this.lastFolio += 1;
        next = this.lastFolio;
      } else {
        this.lastFolio = next; // save it for the next one
      }

      this.payDetFolioModel[
        provision.cpr_id
      ] = `${DateUtils.getMonthNameSpanish(date.getMonth() + 1)
        .substr(0, 3)
        .toUpperCase()}${date.getFullYear() % 100}-${Utils.pad(
        next,
        "0",
        3,
        -1
      )}`;
    }

    return false;
  }

  nextFolioAvailable(provisionList: CarteraProvision[], date: Date) {
    const monthAbr = DateUtils.getMonthNameSpanish(date.getMonth() + 1)
      .substr(0, 3)
      .toUpperCase();

    const next =
      provisionList
        .filter((p) => p.cpr_folio && p.cpr_folio.substr(0, 3) === monthAbr)
        .reduce((max, p) => {
          const num = parseInt(p.cpr_folio.substr(6, 3), 10);
          return max < num ? num : max;
        }, 0) + 1;

    return next;
  }

  validatePayDetTotal(amount: number) {
    // fix max payDet
    Object.keys(this.payDetModel).forEach((id) => {
      const prov = this.viewData.unitPendingProvisionList.find(
        (p) => p.cpr_id === id
      );

      // if payment is more than remaining
      if (prov.cpr_remaining < this.payDetModel[id]) {
        this.payDetModel[id] = prov.cpr_remaining; // we set the top value which is the remaining
      }
      if (this.payDetModel[id] < 0) {
        this.payDetModel[id] = 0;
      }
    });

    // validate total
    const total: number = Object.keys(this.payDetModel).reduce(
      (prev, current) => prev + this.payDetModel[current],
      0
    );
    this.viewData.payDetCaptureTotal = total;

    if (total > amount) {
      this.viewData.payDetCaptureStatus = "invalid";
      return false;
    } else {
      if (total === amount) {
        this.viewData.payDetCaptureStatus = "valid";
      } else {
        this.viewData.payDetCaptureStatus = null;
      }
    }
  }

  newItem(newItemForm: NgForm) {
    const {
      fDate,
      fAmount,
      unitId,
      fDescription,
      _paymentType,
      paymentId,
    } = this.model;

    if (this.viewData.payDetCaptureStatus === "valid") {
      this.carteraService
        .createPayment(
          _paymentType,
          DateUtils.stringDateToDate(fDate),
          fAmount,
          unitId,
          fDescription,
          paymentId,
          this.payDetModel,
          this.payDetFolioModel
        )
        .then((response) => {
          this.notificationService.notify(
            `Payment created successfully`,
            "Cartera"
          );
          // save up folios into provisions
          Object.keys(this.payDetFolioModel).forEach((id) => {
            const prov = this.viewData.unitPendingProvisionList.find(
              (p) => p.cpr_id === id
            );
            prov.cpr_folio = this.payDetFolioModel[id] || null;
          });
          this.showListAfterPayment(this.payDetModel);
          this.resetForm(newItemForm);
        });
    }
    return false;
  }

  setDescription(amount: number, dateString: string) {
    const date: Date = new Date(dateString);
    this.model.fDescription = `Cuota de Mantenimiento ${DateUtils.getMonthNameSpanish(
      date.getMonth() + 1
    )} ${date.getFullYear()}`;
  }

  resetForm(newItemForm: NgForm) {
    newItemForm.reset();
    this.model._paymentType = "normal";
    this.model._dateType = "current";
    this.model.fDate = DateUtils.formatDate(DateUtils.newDateUpToSeconds());
    this.model.fAmount = null;
    this.model.unitId = null;
    this.model.fDescription = null;

    this.payDetModel = {};
    this.payDetFolioModel = {};
    this.viewData.payDetCaptureTotal = 0;
    this.viewData.payDetCaptureStatus = null;
    this.viewData.showPayDetList = false;
    this.viewData.showItemForm = false;
  }

  setPaymentDetailsInForm(form: NgForm, paymentId: string) {
    const payment: CarteraPayment = this.viewData.nonIdentifiedPaymentList.find(
      (e) => e.cpy_id === paymentId
    );

    this.model._dateType = "custom";
    this.model.fAmount = payment.cpy_amount;
    this.setDescription(payment.cpy_amount, this.model.fDate);
  }

  showFutureProvisions(unitId: string) {
    this.viewData.unitPendingProvisionList = this.viewData.pendingProvisionList
      .filter((e) => e.cpr_id_unit === unitId)
      .concat(
        this.viewData.futureProvisionList.filter(
          (e) => e.cpr_id_unit === unitId
        )
      );
  }

  showListAfterPayment(payDetModel) {
    this.viewData.unitPendingProvisionListAfterPayment = [];
    const list = this.viewData.unitPendingProvisionListAfterPayment;

    Object.keys(payDetModel).forEach((id) => {
      const provision = this.viewData.unitPendingProvisionList.find(
        (p) => p.cpr_id === id
      );

      // apply payment
      provision.cpr_payed += payDetModel[id];
      provision.cpr_remaining -= payDetModel[id];

      list.push(provision);
    });

    this.viewData.showPayDetListAfterPayment = true;
  }

  validatePayDetFolio(provision: CarteraProvision) {
    if (provision.cpr_remaining !== this.payDetModel[provision.cpr_id]) {
      this.viewData.payDetFolioCaptureStatus = "invalid";
      return false;
    }

    const duplicate = this.viewData.pendingProvisionList.find(
      (p) => p.cpr_folio === this.payDetFolioModel[provision.cpr_id]
    );
    if (duplicate) {
      this.viewData.payDetFolioCaptureStatus = "invalid";
      return false;
    }

    this.viewData.payDetFolioCaptureStatus = "valid";
    return true;
  }

  getUnitsWithoutPayment() {
    return this.viewData.pendingProvisionList
      .filter(
        (p) =>
          p.cpr_remaining !== 0 &&
          p.cpr_year === this.viewData.year &&
          p.cpr_month === this.viewData.month
      )
      .map((p) => p.cpr_id_unit);
  }

  toggleUnitList() {
    this.viewData.showOnlyUnitsWithoutPayment = !this.viewData
      .showOnlyUnitsWithoutPayment;
    this.viewData.unitList = this.viewData.showOnlyUnitsWithoutPayment
      ? this.getUnitsWithoutPayment()
      : UNIT_LIST;
  }
}
