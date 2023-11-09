import { Component, OnInit } from "@angular/core";
import { CarteraService } from "./CarteraService";
import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { CarteraPayment } from "src/crosscommon/entities/CarteraPayment";
import { DateUtils } from "src/crosscommon/DateUtility";
import { Title } from "@angular/platform-browser";
import { NgForm } from "@angular/forms";
import { NotificationService } from "../common/notification.service";
import { Utils } from "src/crosscommon/Utility";
import { AuthenticationService } from "../common/authentication.service";

const CUOTA_NORMAL = "cuota-normal";
const PROVISION_AMOUNT = 1480;
const UNIT_LIST: string[] | number[] = [
  101, 102, 103, 104, 201, 202, 203, 204, 301, 302, 303, 304, 401, 402, 403,
  404, 501, 502, 503, 504,
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
    reportList: Array<any>;
    periodList: Array<any>;
    showGenerateReportSection: boolean;
    showGenerateProvisionsSection: boolean;
    nextMonthWithProvisionsToGenerate: Array<any>;
    nextMonthsForExtraordinaryProvisions: Array<any>;
    showBatchPaymentsSection: boolean;
    appliedPayments: Array<any>;
    parsedTotalPayed: number;
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
    reportList: [],
    periodList: [],
    showGenerateReportSection: false,
    showGenerateProvisionsSection: false,
    nextMonthWithProvisionsToGenerate: [],
    nextMonthsForExtraordinaryProvisions: [],
    showBatchPaymentsSection: false,
    appliedPayments: [],
    parsedTotalPayed: 0,
  };
  public model: {
    _paymentType: string;
    _dateType: string;
    fDate: string;
    fAmount: number;
    unitId: string;
    fDescription: string;
    paymentId: string;
    period: string;
    report: string;
    nextPeriod: string;
    extraPeriod: string;
    extraAmount: number;
    resetForm: boolean;
    batchPaymentInput: string;
  } = {
    _paymentType: "normal",
    _dateType: "current",
    fDate: DateUtils.formatDate(DateUtils.newDateUpToSeconds()),
    fAmount: 0,
    unitId: null,
    fDescription: null,
    paymentId: null,
    period: null,
    report: null,
    nextPeriod: null,
    extraPeriod: null,
    extraAmount: 0,
    resetForm: true,
    batchPaymentInput: null,
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
    private titleService: Title,
    private authenticationService: AuthenticationService
  ) {
    this.parseQueryString();
    this.titleService.setTitle("Cartera");
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
    let periodIterator = DateUtils.getIterableCurrentMonth(
      this.viewData.year,
      this.viewData.month
    );
    const lastMonth = DateUtils.getIterableCurrentMonth(2019, 11);

    while (periodIterator.iterable > lastMonth.iterable) {
      this.viewData.periodList.push({
        iterable: periodIterator.iterable,
        name: `${DateUtils.getMonthNameSpanish(periodIterator.month)} ${
          periodIterator.year
        }`,
      });

      periodIterator = DateUtils.getIterablePreviousMonth(
        periodIterator.year,
        periodIterator.month
      );
    }

    this.viewData.reportList.push({
      iterable: "/cartera-results?year={year}&month={month}",
      name: "Estado de Resultados",
    });
    this.viewData.reportList.push({
      iterable: "/cartera-movements?year={year}&month={month}",
      name: "Ingresos y Egresos",
    });
    this.viewData.reportList.push({
      iterable: "/cartera-pending-payments?year={year}&month={month}",
      name: "Relación de Cobranza",
    });
    this.viewData.reportList.push({
      iterable: "/cartera-payment-report?year={year}&month={month}",
      name: "Resumen de Recaudación",
    });
    this.viewData.reportList.push({
      iterable:
        "/cartera-payment-report?year={year}&month={month}&layout=print",
      name: "Formato de Recaudación",
    });
    this.viewData.reportList.push({
      iterable: "/receipt-report?year={year}&month={month}",
      name: "Recibos de Pago",
    });

    this.model.report = this.viewData.reportList[0].iterable;
    this.model.period = this.viewData.periodList[0].iterable;

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

        // Determine next month without provisions if we need to generate future provisions
        // we start with current month, targeting that next month is the one that needs generation
        let month = DateUtils.dateOnly().getMonth() + 1;
        let year = DateUtils.dateOnly().getFullYear();
        if (this.viewData.futureProvisionList.length) {
          // but we also check if we already have future months, then grab the last one
          year =
            this.viewData.futureProvisionList[
              this.viewData.futureProvisionList.length - 1
            ].cpr_year;
          month =
            this.viewData.futureProvisionList[
              this.viewData.futureProvisionList.length - 1
            ].cpr_month;
        }
        // now we're covered, get that next month
        const nextMonthIterable = DateUtils.getIterableNextMonth(year, month);
        this.viewData.nextMonthWithProvisionsToGenerate.push({
          iterable: nextMonthIterable.iterable,
          name: `${DateUtils.getMonthNameSpanish(nextMonthIterable.month)} ${
            nextMonthIterable.year
          }`,
          selected: true,
        });
        // since it's always 1 period, we assign it early to have it ready
        this.model.nextPeriod = String(nextMonthIterable.iterable);

        // Periods for extraordinary provision generation
        const baseMonth = DateUtils.getIterableCurrentMonth(year, month);
        const baseMonth1 = DateUtils.getIterableNextMonth(year, month);
        this.viewData.nextMonthsForExtraordinaryProvisions = [
          baseMonth,
          baseMonth1,
          DateUtils.getIterableNextMonth(baseMonth1.year, baseMonth1.month),
        ].map((item, index) => ({
          iterable: item.iterable,
          name: `${DateUtils.getMonthNameSpanish(item.month)} ${item.year}`,
          selected: index === 0,
        }));

        this.model.extraPeriod = String(baseMonth.iterable);
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
    this.viewData.unitPendingProvisionList =
      this.viewData.pendingProvisionList.filter(
        (e) => e.cpr_id_unit === unitId
      );

    if (this.viewData.unitPendingProvisionList.length === 0) {
      this.viewData.unitPendingProvisionList =
        this.viewData.futureProvisionList.filter(
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
    const { fDate, fAmount, unitId, fDescription, _paymentType, paymentId } =
      this.model;

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
            // prov.cpr_condoned = _paymentType === 'condonation' ? prov.cpr_condoned + fAmount : prov.cpr_condoned;
            // prov.cpr_payed = _paymentType === 'condonation' ? prov.cpr_payed : prov.cpr_payed + fAmount;
            // prov.cpr_remaining = prov.cpr_amount - prov.cpr_condoned - prov.cpr_payed - fAmount;
          });
          this.showListAfterPayment(this.payDetModel);
          if (this.model.resetForm) {
            this.resetForm(newItemForm);
          } else {
            this.resetSoftForm(newItemForm);
          }
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

    this.toggleUnitList();
    this.toggleUnitList();
  }

  resetSoftForm(newItemForm: NgForm) {
    this.model.fAmount = null;
    this.model.unitId = null;

    this.payDetModel = {};
    this.payDetFolioModel = {};
    this.viewData.payDetCaptureTotal = 0;
    this.viewData.payDetCaptureStatus = null;
    this.viewData.showPayDetList = false;

    this.toggleUnitList();
    this.toggleUnitList();
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
    const unitList = this.viewData.pendingProvisionList
      .filter(
        (p) =>
          p.cpr_remaining !== 0 &&
          p.cpr_year === this.viewData.year &&
          p.cpr_month === this.viewData.month
      )
      .map((p) => p.cpr_id_unit);
    return [...new Set(unitList)];
  }

  toggleUnitList() {
    this.viewData.showOnlyUnitsWithoutPayment =
      !this.viewData.showOnlyUnitsWithoutPayment;
    this.viewData.unitList = this.viewData.showOnlyUnitsWithoutPayment
      ? this.getUnitsWithoutPayment()
      : UNIT_LIST;
  }

  openReport(report: string, period: string) {
    const year = period.substring(0, 4);
    const month = parseInt(period.substring(4, 6), 10);
    const url = report
      .replace("{year}", year)
      .replace("{month}", String(month));

    window.open(url, "_blank");
  }

  generateProvisionsForMonth(period: string) {
    const year = parseInt(period.substring(0, 4), 10);
    const month = parseInt(period.substring(4, 6), 10);
    const url = "/api/external/cartera/generate-provisions";

    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        year: year,
        month: month,
        user: this.authenticationService.currentUserValue.username,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        let message = "Error generating provisions, try again later";
        if (response.success) {
          message = "Provisions generated correctly";
        }
        this.notificationService.notifyWithOptions(message, {
          title: "Cartera",
        });
        // update period if user wants to keep generating provisions
        const nextMonthIterable = DateUtils.getIterableNextMonth(year, month);
        this.viewData.nextMonthWithProvisionsToGenerate = [
          {
            iterable: nextMonthIterable.iterable,
            name: `${DateUtils.getMonthNameSpanish(nextMonthIterable.month)} ${
              nextMonthIterable.year
            }`,
            selected: true,
          },
        ];
        // since it's always 1 period, we assign it early to have it ready
        this.model.nextPeriod = String(nextMonthIterable.iterable);
      });
  }

  generateExtraordinaryProvisionsForMonth(period: string) {
    const year = parseInt(period.substring(0, 4), 10);
    const month = parseInt(period.substring(4, 6), 10);
    const url = "/api/external/cartera/generate-provisions";

    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        year: year,
        month: month,
        user: this.authenticationService.currentUserValue.username,
        extraordinary: true,
        amount: this.model.extraAmount,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        let message = "Error generating provisions, try again later";
        if (response.success) {
          message = "Provisions generated correctly";
        }
        this.notificationService.notifyWithOptions(message, {
          title: "Cartera",
        });
        /* // update period if user wants to keep generating provisions
        const nextMonthIterable = DateUtils.getIterableNextMonth(year, month);
        this.viewData.nextMonthWithProvisionsToGenerate = [
          {
            iterable: nextMonthIterable.iterable,
            name: `${DateUtils.getMonthNameSpanish(nextMonthIterable.month)} ${
              nextMonthIterable.year
            }`,
            selected: true,
          },
        ];
        // since it's always 1 period, we assign it early to have it ready
        this.model.nextPeriod = String(nextMonthIterable.iterable); */
      });
  }

  /**
   * Syntax: Unit|MonthIdentificationRule|Amount|Details
   * Where:
   * MonthIdentificationRule = fragment.split('-').length === 2 ? "Year-Month" : Month
   * Details = [Detail] with ";" separator
   * Detail = MonthIdentificationRule[+Amount(default:1480)]
   */
  parseBatchPayments(rawInput: string) {
    const baseYear = DateUtils.dateOnly().getFullYear();
    const baseMonth = DateUtils.dateOnly().getMonth();

    const parseDayOfMonth = (raw: number): Date =>
      DateUtils.stringDateToDate(
        `${baseYear}-${DateUtils.fillString(
          baseMonth,
          2,
          -1,
          "0"
        )}-${DateUtils.fillString(raw, 2, -1, "0")}`
      );

    const parseMonthRule = (
      raw: string
    ): { year: number; month: number; isPenalty: boolean } => {
      const parsed = raw.split("-");
      const result = {
        year: baseYear,
        month: 0,
        isPenalty: parsed.length === 3,
      };

      if (parsed.length > 1) {
        result.year = parseInt(parsed[0]);
        result.month = parseInt(parsed[1]);
      }
      if (parsed.length === 1) {
        result.month = parseInt(parsed[0]);
      }

      return result;
    };

    type paymentRule = {
      unit: number | string;
      date: Date;
      amount: number;
      details: Array<{
        year: number;
        month: number;
        isPenalty: boolean;
        amount: number;
      }>;
    };

    const parsedInput: Array<paymentRule> = rawInput
      .split("\n") // separate rows
      .map((row): paymentRule => {
        const parts = row.split("|");

        return {
          unit: parts[0],
          date: parseDayOfMonth(parseInt(parts[1])),
          amount: parseFloat(parts[2]),
          details:
            parts.length === 3
              ? []
              : parts[3].split(";").map(
                  (
                    detail: string
                  ): {
                    year: number;
                    month: number;
                    isPenalty: boolean;
                    amount: number;
                  } => {
                    const parsedDetail = detail.split("+");

                    return {
                      ...parseMonthRule(parsedDetail[0]),
                      amount:
                        parsedDetail.length === 2
                          ? parseFloat(parsedDetail[1])
                          : 1480,
                    };
                  }
                ),
        };
      })
      .sort((a, b) => {
        if (a.date.getTime() > b.date.getTime()) {
          return 1;
        }
        if (a.date.getTime() < b.date.getTime()) {
          return -1;
        }
        if (a.unit > b.unit) {
          return 1;
        }
        return -1;
      });

    console.log("--parsedInput", parsedInput);

    let nextFolio = 0;
    this.viewData.appliedPayments = [];
    this.viewData.appliedPayments = parsedInput.map((i) => {
      const payDetList = {};
      const payDetFolioList = {};
      const payDet = [];
      let provision: CarteraProvision = null;
      if (i.details.length > 0) {
        // add payDet until amount is filled
        i.details.forEach((current) => {
          provision = this.viewData.pendingProvisionList.find(
            (prov) =>
              prov.cpr_type ===
                (current.isPenalty ? "cuota-penalidad" : "cuota-normal") &&
              prov.cpr_year === current.year &&
              prov.cpr_month === current.month &&
              prov.cpr_id_unit === String(i.unit)
          );

          if (provision) {
            payDetList[provision.cpr_id] = current.amount;
            payDet.push({
              provision,
              provId: provision.cpr_id,
              amount: current.amount,
            });
          } else {
            // if provision was not found, try in the future provisions listing
            provision = this.viewData.futureProvisionList.find(
              (prov) =>
                prov.cpr_type ===
                  (current.isPenalty ? "cuota-penalidad" : "cuota-normal") &&
                prov.cpr_year === current.year &&
                prov.cpr_month === current.month &&
                prov.cpr_id_unit === String(i.unit)
            );

            if (provision) {
              payDetList[provision.cpr_id] = current.amount;
              payDet.push({
                provision,
                provId: provision.cpr_id,
                amount: current.amount,
              });
            }
          }

          if (!provision) {
            // provision not found
            this.notificationService.notify(
              `Error: Provision that you want to pay was not found, unit ${i.unit} period: ${current.year}-${current.month} penalty: ${current.isPenalty}`
            );
            console.error(
              "--provision not found, verify since a folio may not be assigned properly",
              {
                payDetList,
                provision,
                parsedPayment: i,
                current,
                pendingProvisions: this.viewData.pendingProvisionList,
                futureProvisions: this.viewData.futureProvisionList,
              }
            );
          }

          // if payment is complete for this provision, generate folio
          if (
            payDetList[provision.cpr_id] &&
            payDetList[provision.cpr_id] === provision.cpr_remaining
          ) {
            nextFolio = nextFolio + 1;

            payDetFolioList[
              provision.cpr_id
            ] = `${DateUtils.getMonthNameSpanish(baseMonth)
              .substr(0, 3)
              .toUpperCase()}${baseYear % 100}-${Utils.pad(
              nextFolio,
              "0",
              3,
              -1
            )}`;

            payDet[payDet.length - 1].folio = payDetFolioList[provision.cpr_id];
          }

          if (
            !payDetList[provision.cpr_id] ||
            payDetList[provision.cpr_id] > provision.cpr_remaining
          ) {
            this.notificationService.notify(
              `Payment not configured correctly, paying ${
                payDetList[provision.cpr_id]
              } and remaining ${provision.cpr_remaining} don't match`
            );
          }
        });
      } else {
        // no details, add a single payDet for a single payment
        const provision = this.viewData.pendingProvisionList.find(
          (prov) =>
            prov.cpr_type === "cuota-normal" &&
            prov.cpr_year === i.date.getFullYear() &&
            prov.cpr_month === i.date.getMonth() + 1 &&
            prov.cpr_id_unit === String(i.unit)
        );

        payDetList[provision.cpr_id] = i.amount;
        payDet.push({
          provision,
          provId: provision.cpr_id,
          amount: i.amount,
        });

        if (payDetList[provision.cpr_id] === provision.cpr_remaining) {
          nextFolio = nextFolio + 1;

          payDetFolioList[provision.cpr_id] = `${DateUtils.getMonthNameSpanish(
            baseMonth
          )
            .substr(0, 3)
            .toUpperCase()}${baseYear % 100}-${Utils.pad(
            nextFolio,
            "0",
            3,
            -1
          )}`;
        }

        payDet[payDet.length - 1].folio = payDetFolioList[provision.cpr_id];
      }

      console.log("--payment batch data", {
        i,
        payDet,
        payDetList,
        payDetFolioList,
      });
      this.viewData.appliedPayments.push({
        ...i,
        payDet,
        payDetList,
        payDetFolioList,
      });

      return {
        ...i,
        payDet,
        payDetList,
        payDetFolioList,
      };
    });

    console.log(
      "--this.viewData.appliedPayments",
      this.viewData.appliedPayments
    );

    this.viewData.parsedTotalPayed = this.viewData.appliedPayments.reduce(
      (total, current) => total + current.amount,
      0
    );
  }

  async saveBatchPayments() {
    for (const i of this.viewData.appliedPayments) {
      console.log("--scheduling payment", i);

      await this.carteraService
        .createPayment(
          "normal",
          i.date,
          i.amount,
          i.unit,
          `Cuota de Mantenimiento ${DateUtils.getMonthNameSpanish(
            i.date.getMonth() + 1
          )} ${i.date.getFullYear()}`,
          null,
          i.payDetList,
          i.payDetFolioList
        )
        .then((response) => {
          i.applied = true;
          this.notificationService.notify(
            `Payment created successfully for unit ${i.unit}`,
            "Cartera"
          );
          // save up folios into provisions
          Object.keys(i.payDetFolioList).forEach((id) => {
            const prov = this.viewData.pendingProvisionList.find(
              (p) => p.cpr_id === id
            );
            prov.cpr_folio = i.payDetFolioList[id] || null;
          });
          return true;
        });
    }

    try {
      await this.carteraService.registerMonthlyIncome(
        new Date().getFullYear(),
        new Date().getMonth() + 1
      );

      this.notificationService.notify(
        "Monthly income was registered successfully",
        "Cartera"
      );
    } catch (error) {
      console.error("Failed to register monthly income", error);
      this.notificationService.notify(
        "Monthly income failed to register, try again later",
        "Cartera"
      );
    }
  }
}
