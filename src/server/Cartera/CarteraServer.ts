import { CarteraProvision } from "../../crosscommon/entities/CarteraProvision";
import { Utils } from "../../crosscommon/Utility";
import { ApiModule } from "../ApiModule";
import { iNode } from "../iNode";
import { DateUtils } from "../../crosscommon/DateUtility";
import { CarteraPayment } from "../../crosscommon/entities/CarteraPayment";
import { CarteraPayDet } from "../../crosscommon/entities/CarteraPayDet";
import iConnection from "../iConnection";
import ConnectionService from "../ConnectionService";
import { Movement } from "../../crosscommon/entities/Movement";
import { MovementCustom } from "../Movement/MovementCustom";
import { Balance } from "../../crosscommon/entities/Balance";
import { MoSQL } from "../MoSQL";
import { Timeline } from "../../crosscommon/entities/Timeline";
import { Crypto } from "../Crypto";
import { CarteraUnit } from "../../crosscommon/entities/CarteraUnit";
import { getUnits, getProvisions, getPayments, getPayDetList } from './CarteraCommons'
import { sendReceiptEmail } from "./SendReceiptEmail";

// configuration
const CODE_NORMAL = "cuota-normal";
const CODE_PENALIZATION = "cuota-penalidad";
const CODE_EXTRA = "cuota-extra";
const CODE_EXTRA_PENALIZATION = "cuota-extra_penalidad";
const CODE_NONE = "none";

const mapConceptWithCode = {
  Cuota: CODE_NORMAL,
  Penalización: CODE_PENALIZATION,
  Extra: CODE_EXTRA,
  PenaExtra: CODE_EXTRA_PENALIZATION,
};

const mapConceptWithDescription = {
  Cuota: "Cuota de Mantenimiento",
  Penalización: "Penalización",
  Extra: "Cuota Extraordinaria",
  PenaExtra: "Penalidad de Cuota Extraordinaria",
  None: "Depósito sin identificar",
};

const mapCodeWithDescription = {
  [CODE_NORMAL]: mapConceptWithDescription["Cuota"],
  [CODE_PENALIZATION]: mapConceptWithDescription["Penalización"],
  [CODE_EXTRA]: mapConceptWithDescription["Extra"],
  [CODE_EXTRA_PENALIZATION]: mapConceptWithDescription["PenaExtra"],
  [CODE_NONE]: mapConceptWithDescription["None"],
};

const PROVISION_AMOUNT = 1480;
const PENALIZATION_AMOUNT = 148;

export class CarteraServer {
  generateAllProvisionsForMonthHandler(node: iNode) {
    const { year, month, user } = node.request.body;

    this.generateAllProvisionsForMonth(year, month, user).then(
      (provisionList) => {
        node.response.end(
          JSON.stringify({
            operationOk: true,
            provisionList: provisionList.map((provision) =>
              Utils.entityToRawTableFields(provision)
            ),
          })
        );
      }
    );
  }

  generateAllProvisionsForMonth(
    year: number,
    month: number,
    user: string
  ): Promise<CarteraProvision[]> {
    const UNITS: string[] | number[] = [
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

    return this.generateProvisions(year, month, UNITS, user);
  }

  generateProvisions(
    year: number,
    month: number,
    units: string[] | number[],
    user: string
  ): Promise<CarteraProvision[]> {
    const allProvisions: Promise<CarteraProvision>[] = [];

    units.forEach((unit) => {
      allProvisions.push(this.generateProvision(year, month, unit, user));
    });

    return Promise.all(allProvisions);
  }

  buildConcept(conceptPrefix: string, year: number, month: number) {
    return `${conceptPrefix} ${DateUtils.getMonthNameSpanish(month)} ${year}`;
  }

  generateProvision(
    year: number,
    month: number,
    unitId: string,
    user: string
  ): Promise<CarteraProvision> {
    // configuration
    const AMOUNT = 1480.0;

    const provision: CarteraProvision = new CarteraProvision({
      cpr_id_unit: unitId,
      cpr_date: new Date(year, month - 1, 1),
      cpr_concept: this.buildConcept("Cuota de Mantenimiento", year, month),
      cpr_code_reference: `${CODE_NORMAL}|${year}-${Utils.pad(
        month,
        "0",
        2,
        -1
      )}`,
      cpr_amount: AMOUNT,
      cpr_payed: 0,
      cpr_condoned: 0,
      cpr_remaining: AMOUNT,
      cpr_folio: null,
      cpr_type: CODE_NORMAL,
      cpr_year: year,
      cpr_month: month,
      cpr_id_user: user,
      cpr_date_add: new Date(),
      cpr_date_mod: new Date(),
      cpr_ctg_status: 1,
    });

    provision.cpr_id = Utils.hashIdForEntity(provision, "cpr_id");

    const apiCarteraProvision: ApiModule = new ApiModule(provision);

    return this.saveProvision(apiCarteraProvision, provision);
  }

  saveProvision(
    apiCarteraProvision: ApiModule,
    provision: CarteraProvision,
    model?: CarteraProvision
  ) {
    return apiCarteraProvision
      .create({ body: Utils.entityToRawTableFields(provision) }, {}, model)
      .then((response) => {
        if (response.operationOk) {
          return provision;
        }
        console.log(
          "error generating Provision",
          provision.recordName,
          response
        );
        return null;
      })
      .catch((err) => {
        console.log("error generating Provision", provision.recordName, err);
        return null;
      });
  }

  registerBatchPaymentsHandler(node: iNode) {
    const { batchInfo, user } = node.request.body;

    const paymentList: CarteraPayment[] = this.transformBatchInfoToPayment(
      batchInfo,
      user
    );

    this.savePayments(paymentList).then(async (payList) => {
      // Payments are saved, now peek into payments date to generate penalization provisions
      /* paymentList.forEach(p => {
        this.generatePenalizationProvisionForLatePayment(p);
      });*/

      // Now match those payments to provisions
      const paymentsApplied = await this.matchPaymentsWithProvisions(
        paymentList
      );

      node.response.end(
        JSON.stringify({
          operationOk: true,
          provisionList: payList.map((payment) =>
            Utils.entityToRawTableFields(payment)
          ),
          paymentsApplied,
        })
      );
    });
  }

  transformBatchInfoToPayment(data: string[], user: string): CarteraPayment[] {
    const list: CarteraPayment[] = [];

    /**
     * Possible format
     * 201|cuota-normal|2019|11|2019-11-04|1480
     * 202|cuota-normal|2019|11|2019-11-04|1480
     */
    data.forEach((row) => {
      const columns: string[] = row.split("|");

      list.push(
        new CarteraPayment({
          cpy_id: Utils.hashIdForEntity(new CarteraPayment(), "cpy_id"),
          cpy_date: DateUtils.stringDateToDate(columns[4]),
          cpy_amount: parseFloat(columns[5]),
          cpy_description: this.buildConcept(
            mapCodeWithDescription[columns[1]],
            parseInt(columns[2]),
            parseInt(columns[3])
          ),
          cpy_match_hint: `${columns[1]}|${columns[2]}-${Utils.pad(
            columns[3],
            "0",
            2,
            -1
          )}|${columns[0]}`,
          cpy_id_user: user,
          cpy_date_add: DateUtils.newDateUpToSeconds(),
          cpy_date_mod: DateUtils.newDateUpToSeconds(),
          cpy_ctg_status: 1,
        })
      );
    });

    return list;
  }

  savePayments(paymentList: CarteraPayment[]): Promise<CarteraPayment[]> {
    const allPayments: Promise<CarteraPayment>[] = [];

    paymentList.forEach((payment) => {
      allPayments.push(this.savePayment(payment));
    });

    return Promise.all(allPayments);
  }

  savePayment(payment: CarteraPayment): Promise<CarteraPayment> {
    const apiCarteraPayment: ApiModule = new ApiModule(new CarteraPayment());

    return apiCarteraPayment
      .create({ body: Utils.entityToRawTableFields(payment) }, {})
      .then((response) => {
        if (response.operationOk) {
          return payment;
        }
        console.log("error generating Payment", payment.recordName, response);
        return null;
      })
      .catch((err) => {
        console.log("error generating Payment", payment.recordName, err);
        return null;
      });
  }

  generatePenalizationProvisionForLatePayment(payment: CarteraPayment) {
    // Determine limit date for month
    let limitDate: Date = new Date(
      payment.cpy_date.getFullYear(),
      payment.cpy_date.getMonth(),
      15
    );
    while (limitDate.getDay() % 6 === 0) {
      // 0 = Sunday and 6 = Saturday, so anything different should not be 0 on module 6
      limitDate = DateUtils.addDays(limitDate, 1);
    }

    if (limitDate.getTime() < payment.cpy_date.getTime()) {
      // payment is greater than limit date
      // then should generate penalization
      // only if normal provision is not yet payed
      console.log(
        `For this payment ${
          payment.cpy_id
        } the date of payment ${DateUtils.formatDate(
          payment.cpy_date
        )} is greater that the limit date ${DateUtils.formatDate(
          limitDate
        )}, a penalization provision should be generated`
      );
    }
  }

  async matchPaymentsWithProvisions(paymentList: CarteraPayment[]) {
    const paymentsApplied = [];
    const payDetList: CarteraPayDet[] = [];
    // get Provisions with remaining amount
    const apiCarteraProvision: ApiModule = new ApiModule(
      new CarteraProvision()
    );
    const provisionList: CarteraProvision[] = await apiCarteraProvision
      .list({})
      .then((items) => items.map((i) => new CarteraProvision(i)));

    // iterate over payments
    paymentList.forEach(async (payment) => {
      // for this payment, find the proper provision and register the match
      const provision = provisionList.find(
        (item) =>
          payment.cpy_match_hint ===
          `${item.cpr_code_reference}|${item.cpr_id_unit}`
      );

      if (provision) {
        // found a provision
        if (provision.cpr_remaining === 0) {
          // TODO: provision is payed, should apply to subsequent provisions
          console.log(
            `payment with id ${payment.cpy_id} was tried to apply at provision with id ${provision.cpr_id} but it's already payed, a remaining of ${payment.cpy_amount} was not applied to a provision`
          );
        } else {
          // pay the remaining or amount depending which one is less than the other
          const amount =
            provision.cpr_remaining < payment.cpy_amount
              ? provision.cpr_remaining
              : payment.cpy_amount;

          const paydet: CarteraPayDet = new CarteraPayDet({
            cpd_id: Utils.hashIdForEntity(new CarteraPayDet(), "cpd_id"),
            cpd_id_provision: provision.cpr_id,
            cpd_id_payment: payment.cpy_id,
            cpd_amount: amount,
            cpd_id_user: payment.cpy_id_user,
            cpd_date_add: DateUtils.newDateUpToSeconds(),
            cpd_date_mod: DateUtils.newDateUpToSeconds(),
            cpd_ctg_status: 1,
          });

          payDetList.push(paydet);

          const remaining: boolean =
            provision.cpr_remaining < payment.cpy_amount;
          provision.cpr_payed += amount;
          provision.cpr_remaining -= amount;

          const apiCarteraPayDet: ApiModule = new ApiModule(paydet);
          await this.savePayDet(apiCarteraPayDet, paydet).then(
            async (response) => {
              return await this.updateProvision(
                apiCarteraProvision,
                provision,
                provision
              ).then(async (updateResponse) => {
                paymentsApplied.push({
                  payment: Utils.entityToRawTableFields(payment),
                  provisionList: [
                    {
                      provision: Utils.entityToRawTableFields(provision),
                      paydet: Utils.entityToRawTableFields(paydet),
                    },
                  ],
                });

                if (remaining) {
                  // remaining is less than payment
                  // TODO: should apply the rest of the payment to subsequent provisions
                  const amountLeft = await this.applyRemainingPaymentToSubsequentProvisions(
                    payment.cpy_amount - amount,
                    payment,
                    provision,
                    provisionList,
                    paymentsApplied
                  );

                  console.log(
                    `payment with id ${payment.cpy_id} has a remaining of ${amountLeft} that was not applied to a provision`
                  );
                } else {
                  // payment is less than or equal to remaining
                  // so, this payment is already assigned to provisions, proceed with the next one
                }
              });
            }
          );
        }
      }
    });

    return paymentsApplied;
  }

  initialProvisionBatchHandler(node: iNode) {
    const { batchInfo, user } = node.request.body;

    const provisionList: CarteraProvision[] = this.transformBatchInfoToProvision(
      batchInfo,
      user
    );

    const apiCarteraProvision: ApiModule = new ApiModule(
      new CarteraProvision()
    );
    const allProvisions: Promise<CarteraProvision>[] = [];

    provisionList.forEach((provision) => {
      allProvisions.push(
        this.saveProvision(apiCarteraProvision, provision, provision)
      );
    });

    return Promise.all(allProvisions).then((list) => {
      console.log("listing", provisionList);
      node.response.end(
        JSON.stringify({
          operationOk: true,
          provisionList: list.map((provision) =>
            Utils.entityToRawTableFields(provision)
          ),
        })
      );
    });
  }

  transformBatchInfoToProvision(
    data: string[],
    user: string
  ): CarteraProvision[] {
    /**
     * Format
     * unit|type|year-month|-|-|-|-|amount
     * 204|PenaExtra|2018-12|125|0|68|16/07/2019|57
     * 301|Cuota|2019-03|1480|0|1132|20/03/2019|348
     * 302|Penalización|2018-04|148|0|141|23/09/2019|7
     */
    const list: CarteraProvision[] = [];

    data.forEach((row) => {
      const columns: string[] = row.split("|");
      const year: number = parseInt(columns[2].split("-")[0], 10);
      const month: number = parseInt(columns[2].split("-")[1], 10);

      list.push(
        new CarteraProvision({
          cpr_id: Utils.hashIdForEntity(new CarteraProvision(), "cpr_id"),
          cpr_id_unit: columns[0],
          cpr_date: new Date(year, month - 1, 1),
          cpr_concept: this.buildConcept(
            mapConceptWithDescription[columns[1]],
            year,
            month
          ),
          cpr_code_reference: `${
            mapConceptWithCode[columns[1]]
          }|${year}-${Utils.pad(month, "0", 2, -1)}`,
          cpr_amount: parseFloat(columns[7]),
          cpr_condoned: 0,
          cpr_payed: 0,
          cpr_remaining: parseFloat(columns[7]),
          cpr_id_user: user,
          cpr_folio: null,
          cpr_type: mapConceptWithCode[columns[1]],
          cpr_year: year,
          cpr_month: month,
          cpr_date_add: DateUtils.newDateUpToSeconds(),
          cpr_date_mod: DateUtils.newDateUpToSeconds(),
          cpr_ctg_status: 1,
        })
      );
    });

    return list;
  }

  savePayDet(
    apiCarteraPayDet: ApiModule,
    payDet: CarteraPayDet,
    model?: CarteraPayDet
  ) {
    return apiCarteraPayDet
      .create({ body: Utils.entityToRawTableFields(payDet) }, {}, model)
      .then((response) => {
        if (response.operationOk) {
          return payDet;
        }
        console.log("error generating payDet", payDet.recordName, response);
        return null;
      })
      .catch((err) => {
        console.log("error generating payDet", payDet.recordName, err);
        return null;
      });
  }

  updateProvision(
    apiCarteraProvision: ApiModule,
    provision: CarteraProvision,
    model?: CarteraProvision
  ) {
    return apiCarteraProvision
      .update(
        {
          body: Utils.entityToRawTableFields(provision),
          pk: Utils.getPKFromEntity(provision),
        },
        {},
        model
      )
      .then((response) => {
        if (response.operationOk) {
          return provision;
        }
        console.log(
          "error generating Provision",
          provision.recordName,
          response
        );
        return null;
      })
      .catch((err) => {
        console.log("error generating Provision", provision.recordName, err);
        return null;
      });
  }

  generatePenalizationForMissingPaymentHandler(node: iNode) {
    const { year, month, user } = node.request.body;

    this.generatePenalizationForMissingPayment(year, month, user).then(
      (list) => {
        node.response.end(
          JSON.stringify({
            operationOk: true,
            provisionList: list.map((provision) =>
              Utils.entityToRawTableFields(provision)
            ),
          })
        );
      }
    );
  }

  async generatePenalizationForMissingPayment(
    year: number,
    month: number,
    user: string
  ) {
    const apiCarteraProvision: ApiModule = new ApiModule(
      new CarteraProvision()
    );

    const filter = {
      gc: "AND",
      cont: [
        {
          f: "cpr_payed",
          op: "eq",
          val: 0,
        },
        {
          f: "cpr_date",
          op: "eq",
          val: new Date(year, month - 1, 1, 0, 0, 0),
        },
      ],
    };
    const provisionList = await apiCarteraProvision
      .list({ q: JSON.stringify(filter) })
      .then((items) => items.map((item) => new CarteraProvision(item)));

    const penalizationList: CarteraProvision[] = [];
    provisionList.forEach((provision) => {
      penalizationList.push(
        new CarteraProvision({
          cpr_id: Utils.hashIdForEntity(new CarteraProvision(), "cpr_id"),
          cpr_id_unit: provision.cpr_id_unit,
          cpr_date: new Date(year, month - 1, 16),
          cpr_concept: this.buildConcept("Penalización", year, month),
          cpr_code_reference: `cuota-penalidad|${year}-${Utils.pad(
            month,
            "0",
            2,
            -1
          )}`,
          cpr_amount: 148,
          cpr_condoned: 0,
          cpr_payed: 0,
          cpr_remaining: 148,
          cpr_id_user: user,
          cpr_folio: null,
          cpr_type: "cuota-penalidad",
          cpr_year: year,
          cpr_month: month,
          cpr_date_add: DateUtils.newDateUpToSeconds(),
          cpr_date_mod: DateUtils.newDateUpToSeconds(),
          cpr_ctg_status: 1,
        })
      );
    });

    const allProvisions: Promise<CarteraProvision>[] = [];

    penalizationList.forEach((provision) => {
      allProvisions.push(
        this.saveProvision(apiCarteraProvision, provision, provision)
      );
    });

    return Promise.all(allProvisions).then((list) => {
      console.log("listing", penalizationList);
      return list;
    });
  }

  findNextProvisionToPay(
    provisionList: CarteraProvision[],
    provision: CarteraProvision
  ) {
    let nextProvision: CarteraProvision = null;

    if (provision.cpr_code_reference.includes("cuota-normal")) {
      // if previous provision is a normal one, look for same month penalization one if any
      nextProvision = provisionList.find((prov) => {
        return (
          prov.cpr_id_unit === provision.cpr_id_unit &&
          prov.cpr_code_reference ===
            provision.cpr_code_reference.replace(
              "cuota-normal",
              "cuota-penalidad"
            ) &&
          prov.cpr_remaining > 0
        );
      });

      if (nextProvision) {
        return nextProvision;
      }

      // if no penalization with remaining balance is found, try next month regular quota
      const [year, month] = provision.cpr_code_reference
        .split("|")[1]
        .split("-")
        .map((value) => parseInt(value));
      const nextYearMonth = DateUtils.getIterableNextMonth(year, month);

      nextProvision = provisionList.find((prov) => {
        return (
          prov.cpr_id_unit === provision.cpr_id_unit &&
          prov.cpr_code_reference ===
            provision.cpr_code_reference.replace(
              `${year}-${month}`,
              `${nextYearMonth.year}-${nextYearMonth.month}`
            ) &&
          prov.cpr_remaining > 0
        );
      });

      if (nextProvision) {
        return nextProvision;
      }

      // if no quota is found, try next month penalization provision
      nextProvision = provisionList.find((prov) => {
        return (
          prov.cpr_id_unit === provision.cpr_id_unit &&
          prov.cpr_code_reference ===
            provision.cpr_code_reference
              .replace(
                `${year}-${month}`,
                `${nextYearMonth.year}-${nextYearMonth.month}`
              )
              .replace("cuota-normal", "cuota-penalidad") &&
          prov.cpr_remaining > 0
        );
      });

      if (nextProvision) {
        return nextProvision;
      }

      // if no quota is found and still not hit last quota in the listing, repeat

      // otherwise more provisions should be generated
    }
    console.log("no new provision pending from payment was found", provision);
    return null;
  }

  async applyRemainingPaymentToSubsequentProvisions(
    remainingAmount: number,
    payment: CarteraPayment,
    provision: CarteraProvision,
    provisionList: CarteraProvision[],
    paymentsApplied: any[]
  ) {
    // so, we have a starting point coming from Provision, first check for penalizations, then normal next month provisions and so on
    // until remainingAmount goes to 0
    if (remainingAmount > 0) {
      // determine next provision
      let nextProvision: CarteraProvision;
      while (remainingAmount > 0) {
        console.log(
          `Will try to pay provisions with remaining amount ${remainingAmount} from payment id ${payment.cpy_id}`
        );
        nextProvision = this.findNextProvisionToPay(provisionList, provision);
        console.log(
          `Found this provision ${nextProvision.cpr_id} to pay`,
          nextProvision
        );

        if (nextProvision) {
          const amount =
            nextProvision.cpr_remaining < remainingAmount
              ? nextProvision.cpr_remaining
              : remainingAmount;

          const paydet: CarteraPayDet = new CarteraPayDet({
            cpd_id: Utils.hashIdForEntity(new CarteraPayDet(), "cpd_id"),
            cpd_id_provision: nextProvision.cpr_id,
            cpd_id_payment: payment.cpy_id,
            cpd_amount: amount,
            cpd_id_user: payment.cpy_id_user,
            cpd_date_add: DateUtils.newDateUpToSeconds(),
            cpd_date_mod: DateUtils.newDateUpToSeconds(),
            cpd_ctg_status: 1,
          });

          nextProvision.cpr_payed += amount;
          nextProvision.cpr_remaining -= amount;

          const apiCarteraPayDet: ApiModule = new ApiModule(paydet);
          const apiCarteraProvision: ApiModule = new ApiModule(nextProvision);
          await this.savePayDet(apiCarteraPayDet, paydet).then(
            async (response) => {
              return await this.updateProvision(
                apiCarteraProvision,
                nextProvision,
                nextProvision
              ).then((updateResponse) => {
                remainingAmount -= amount;

                paymentsApplied
                  .find((detail) => detail.payment.cpy_id === payment.cpy_id)
                  .provisionList.push({
                    provision: Utils.entityToRawTableFields(provision),
                    paydet: Utils.entityToRawTableFields(paydet),
                  });

                return remainingAmount;
              });
            }
          );
        } else {
          // did not find a provision, remainingAmount is left un-applied
          return remainingAmount;
        }
      }
    } else {
      return Promise.resolve(null);
    }
  }

  async assignPaymentHandler(node: iNode) {
    const { payments } = node.request.body;

    const provisionList: CarteraProvision[] = await getProvisions();
    const paymentList: CarteraPayment[] = await getPayments();

    payments.forEach(async (detail) => {
      const selectedPayment = paymentList.find(
        (p) => p.cpy_id === detail.payment_id
      );
      const selectedProvision = provisionList.find(
        (p) => p.cpr_id === detail.provision_id
      );

      const paydet: CarteraPayDet = new CarteraPayDet({
        cpd_id: Utils.hashIdForEntity(new CarteraPayDet(), "cpd_id"),
        cpd_id_provision: selectedProvision.cpr_id,
        cpd_id_payment: selectedPayment.cpy_id,
        cpd_amount: detail.amount,
        cpd_id_user: selectedPayment.cpy_id_user,
        cpd_date_add: DateUtils.newDateUpToSeconds(),
        cpd_date_mod: DateUtils.newDateUpToSeconds(),
        cpd_ctg_status: 1,
      });

      selectedProvision.cpr_payed += detail.amount;
      selectedProvision.cpr_remaining -= detail.amount;

      const apiCarteraPayDet: ApiModule = new ApiModule(paydet);
      const apiCarteraProvision: ApiModule = new ApiModule(selectedProvision);
      await this.savePayDet(apiCarteraPayDet, paydet).then(async (response) => {
        return await this.updateProvision(
          apiCarteraProvision,
          selectedProvision,
          selectedProvision
        ).then((updateResponse) => {
          return true;
        });
      });
    });

    node.response.end(
      JSON.stringify({
        operationOk: true,
      })
    );
  }

  async getPaymentApplicationListing(year: number, month: number) {
    const provisionList: CarteraProvision[] = await getProvisions();
    const paymentList: CarteraPayment[] = await getPayments();
    const payDetList: CarteraPayDet[] = await getPayDetList();

    const initialDate: Date = new Date(year, month - 1, 1);
    const finalDate: Date = new Date(year, month, 1);

    const listing = {
      paymentList: paymentList
        .filter(
          (item) =>
            initialDate.getTime() <= item.cpy_date.getTime() &&
            item.cpy_date.getTime() < finalDate.getTime()
        )
        .map((payment) => {
          return {
            payment: Utils.entityToRawTableFields(payment),
            provisionList: payDetList
              .filter((pd) => pd.cpd_id_payment === payment.cpy_id)
              .map((pd) => {
                return {
                  paydet: Utils.entityToRawTableFields(pd),
                  provision: Utils.entityToRawTableFields(
                    provisionList.find((p) => p.cpr_id === pd.cpd_id_provision)
                  ),
                };
              }),
          };
        }),
    };

    listing.paymentList.sort((a, b) =>
      a.payment.cpy_date.getTime() > b.payment.cpy_date.getTime() ? 1 : -1
    );

    return listing;
  }

  async getPaymentApplicationListingHandler(node: iNode) {
    const { year, month } = node.request.query as any;

    node.response.end(
      JSON.stringify({
        operationOk: true,
        ...(await this.getPaymentApplicationListing(year, month)),
      })
    );
  }

  generatePenalizationForUnitHandler(node: iNode) {
    const { year, month, unit, user } = node.request.body;

    this.generatePenalizationForUnit(year, month, unit, user).then((list) => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
          provisionList: list.map((provision) =>
            Utils.entityToRawTableFields(provision)
          ),
        })
      );
    });
  }

  async generatePenalizationForUnit(
    year: number,
    month: number,
    unit: string,
    user: string
  ) {
    const apiCarteraProvision: ApiModule = new ApiModule(
      new CarteraProvision()
    );

    const filter = {
      gc: "AND",
      cont: [
        {
          f: "cpr_id_unit",
          op: "eq",
          val: unit,
        },
      ],
    };
    const provisionList = await apiCarteraProvision
      .list({ q: JSON.stringify(filter) })
      .then((items) => items.map((item) => new CarteraProvision(item)));

    const penalizationList: CarteraProvision[] = [];
    const provision = provisionList.find(
      (p) =>
        p.cpr_id_unit === unit &&
        p.cpr_code_reference ===
          `cuota-penalidad|${year}-${Utils.pad(month, "0", 2, -1)}`
    );
    if (provision) {
      return penalizationList;
    }

    penalizationList.push(
      new CarteraProvision({
        cpr_id: Utils.hashIdForEntity(new CarteraProvision(), "cpr_id"),
        cpr_id_unit: unit,
        cpr_date: new Date(year, month - 1, 16),
        cpr_concept: this.buildConcept("Penalización", year, month),
        cpr_code_reference: `cuota-penalidad|${year}-${Utils.pad(
          month,
          "0",
          2,
          -1
        )}`,
        cpr_amount: 148,
        cpr_condoned: 0,
        cpr_payed: 0,
        cpr_remaining: 148,
        cpr_id_user: user,
        cpr_folio: null,
        cpr_type: "cuota-penalidad",
        cpr_year: year,
        cpr_month: month,
        cpr_date_add: DateUtils.newDateUpToSeconds(),
        cpr_date_mod: DateUtils.newDateUpToSeconds(),
        cpr_ctg_status: 1,
      })
    );

    const allProvisions: Promise<CarteraProvision>[] = [];

    penalizationList.forEach((item) => {
      allProvisions.push(this.saveProvision(apiCarteraProvision, item, item));
    });

    return Promise.all(allProvisions).then((list) => {
      return list;
    });
  }

  lastFolioAvailable(provisionList: CarteraProvision[], date: Date) {
    const monthAbr = DateUtils.getMonthNameSpanish(date.getMonth() + 1)
      .substr(0, 3)
      .toUpperCase();

    const last = provisionList
      .filter((p) => p.cpr_folio && p.cpr_folio.substr(0, 3) === monthAbr)
      .reduce((max, p) => {
        const num = parseInt(p.cpr_folio.substr(6, 3), 10);
        return max < num ? num : max;
      }, 0);

    return last;
  }

  rebuildPendingPaymentsForMonthHandler(node: iNode) {
    const { year, month, unit, future } = node.request.query as any;

    this.rebuildPendingPaymentsForMonth(
      parseInt(year, 10),
      parseInt(month, 10),
      unit,
      future == 1
    ).then(async (list) => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
          pendingProvisionList: list.pendingProvisionList.map(
            Utils.entityToRawTableFields
          ),
          futureProvisionList: list.futureProvisionList.map(
            Utils.entityToRawTableFields
          ),
          nonIdentifiedPaymentList: list.nonIdentifiedPaymentList.map(
            Utils.entityToRawTableFields
          ),
          timelineList: await this.getTimeline(
            `cartera-pending-provision|${year}-${month}`
          ).then((list) => list.map(Utils.entityToRawTableFields)),
          lastFolio: this.lastFolioAvailable(
            await getProvisions(),
            new Date(year, month - 1, 1)
          ),
        })
      );
    });
  }

  async rebuildPendingPaymentsForMonth(
    year: number,
    month: number,
    unit: string = null,
    includeAllProvisionsForFuture: boolean = false
  ): Promise<{
    pendingProvisionList: CarteraProvision[];
    futureProvisionList: CarteraProvision[];
    nonIdentifiedPaymentList: CarteraPayment[];
  }> {
    let provisionList: CarteraProvision[] = [];

    const limitDate: Date = new Date(year, month, 1); // next month
    const allProvisions: CarteraProvision[] = (
      await getProvisions()
    ).filter((prov) => (unit ? prov.cpr_id_unit === unit : true));

    const allPayDet: CarteraPayDet[] = (
      await getPayDetList()
    ).filter((paydet) =>
      unit
        ? paydet.cpd_id_unit === unit &&
          paydet.cpd_date_payment.getTime() < limitDate.getTime()
        : paydet.cpd_date_payment.getTime() < limitDate.getTime()
    );

    provisionList = allProvisions.map((p) => {
      p.cpr_condoned = 0;
      p.cpr_payed = 0;
      p.cpr_remaining = p.cpr_amount;
      return p;
    });

    allPayDet
      .filter((pd) =>
        pd.cpd_ctg_non_identified === 2
          ? year * 100 + month >=
            pd.cpd_date_identification.getFullYear() * 100 +
              pd.cpd_date_identification.getMonth() +
              1
          : true
      )
      .forEach((paydet) => {
        const prov = provisionList.find(
          (p) => p.cpr_id === paydet.cpd_id_provision
        );

        if (prov) {
          if (paydet.cpd_ctg_type === 2) {
            // condoned
            prov.cpr_condoned += paydet.cpd_amount;
          } else {
            // payed
            prov.cpr_payed += paydet.cpd_amount;
          }
          prov.cpr_remaining -= paydet.cpd_amount;
        } else {
          // should not happen, report error
          console.error(
            `Provision with id ${paydet.cpd_id_provision} not found for paydet with id ${paydet.cpd_id}`
          );
        }
      });

    const pendingProvisionList = provisionList
      .filter(
        (p) =>
          (Math.round(p.cpr_remaining * 100) / 100 !== 0 || // provisions with remaining amount to be payed
            (p.cpr_remaining === 0 && // provisions fully payed in this month
              parseInt(
                p.cpr_code_reference.split("|")[1].replace("-", ""),
                10
              ) !==
                year * 100 + month &&
              allPayDet.filter(
                // payment from this month
                (det) =>
                  det.cpd_id_provision === p.cpr_id &&
                  det.cpd_date_payment.getFullYear() * 100 +
                    det.cpd_date_payment.getMonth() +
                    1 ===
                    year * 100 + month
              ).length > 0) ||
            // provisions identified in this month
            allPayDet.filter(
              (det) =>
                det.cpd_id_provision === p.cpr_id &&
                det.cpd_ctg_non_identified === 2 &&
                det.cpd_date_identification.getFullYear() * 100 +
                  det.cpd_date_identification.getMonth() +
                  1 ===
                  year * 100 + month
            ).length > 0) &&
          p.cpr_date.getTime() < limitDate.getTime() // provisions from this month and previous months
      )
      .sort((a, b) => {
        if (a.cpr_id_unit === b.cpr_id_unit) {
          return a.cpr_date.getTime() > b.cpr_date.getTime() ? 1 : -1;
        }
        return a.cpr_id_unit > b.cpr_id_unit ? 1 : -1;
      });

    const futureProvisionList = provisionList
      .filter(
        (p) =>
          (p.cpr_payed !== 0 || includeAllProvisionsForFuture) &&
          p.cpr_date.getTime() >= limitDate.getTime() // provisions with payments // provisions from next month and future months
      )
      .sort((a, b) => {
        if (a.cpr_id_unit === b.cpr_id_unit) {
          return a.cpr_date.getTime() > b.cpr_date.getTime() ? 1 : -1;
        }
        return a.cpr_id_unit > b.cpr_id_unit ? 1 : -1;
      });

    const nonIdentifiedPaymentList = await this.getNonIdentifiedPaymentsForMonth(
      year,
      month
    );

    return Promise.resolve({
      pendingProvisionList,
      futureProvisionList,
      nonIdentifiedPaymentList,
    });
  }

  async getNonIdentifiedPaymentsForMonth(
    year: number,
    month: number
  ): Promise<CarteraPayment[]> {
    const limitDate: Date = new Date(year, month, 1); // next month
    const paymentList: CarteraPayment[] = (await getPayments()).filter(
      (p) =>
        p.cpy_ctg_non_identified === 2 &&
        p.cpy_date.getTime() < limitDate.getTime() &&
        (p.cpy_date_identification // if it is identified then only show it up until the month it was identified
          ? p.cpy_date_identification.getFullYear() * 100 +
              p.cpy_date_identification.getMonth() +
              1 >=
            year * 100 + month
          : true)
    );

    return Promise.resolve(paymentList);
  }

  unitStatusForMonthHandler(node: iNode) {
    const { year, month, unit } = node.request.query as any;

    this.unitStatusForMonth(year, month, unit).then((list) => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
          provisionList: list.provisionList.map((item) => ({
            provision: Utils.entityToRawTableFields(item.provision),
            payDetList: item.payDetList.map(Utils.entityToRawTableFields),
          })),
          paymentList: list.paymentList.map(Utils.entityToRawTableFields),
        })
      );
    });
  }

  async unitStatusForMonth(
    year: number,
    month: number,
    unit: string
  ): Promise<{
    provisionList: Array<{
      provision: CarteraProvision;
      payDetList: CarteraPayDet[];
    }>;
    paymentList: CarteraPayment[];
  }> {
    const result: {
      provisionList: Array<{
        provision: CarteraProvision;
        payDetList: CarteraPayDet[];
      }>;
      paymentList: CarteraPayment[];
    } = {
      provisionList: [],
      paymentList: [],
    };

    const limitDate: Date = new Date(year, month, 1); // next month
    const allProvisions: CarteraProvision[] = (await getProvisions())
      .filter(
        (prov) =>
          prov.cpr_id_unit === unit &&
          (prov.cpr_date.getTime() >= limitDate.getTime()
            ? prov.cpr_payed > 0
            : true)
      )
      .sort((a, b) => (a.cpr_date.getTime() > b.cpr_date.getTime() ? 1 : -1));

    const allPayments: CarteraPayment[] = (await getPayments())
      .filter((i) => i.cpy_match_hint.endsWith(`|${unit}`))
      .sort((a, b) => (a.cpy_date.getTime() > b.cpy_date.getTime() ? 1 : -1));

    const allPayDet: CarteraPayDet[] = (await getPayDetList()).filter(
      (paydet) => paydet.cpd_id_unit === unit
    );

    console.log(
      `provisions: ${allProvisions.length}, payments: ${allPayments.length}, paydet: ${allPayDet.length}`
    );

    // add up provisions and payments
    /*this.addSpecificProvisionsAndPayments504ExpectedApplication(
      allProvisions,
      allPayments,
      allPayDet
    );*/
    /* this.addSpecificProvisionsAndPayments(
      allProvisions,
      allPayments,
      allPayDet
    ); */
    /*
    this.addSpecificProvisionsAndPayments402CurrentDBApplication(
      allProvisions,
      allPayments,
      allPayDet
    );
*/
    console.log(
      `provisions: ${allProvisions.length}, payments: ${allPayments.length}, paydet: ${allPayDet.length}`
    );

    result.provisionList = allProvisions
      .sort((a, b) => (a.cpr_date.getTime() > b.cpr_date.getTime() ? 1 : -1))
      .map((p) => ({
        provision: p,
        payDetList: allPayDet
          .filter(
            (det) =>
              det.cpd_id_unit == p.cpr_id_unit &&
              det.cpd_id_provision === p.cpr_id
          )
          .sort((a, b) =>
            a.cpd_date.getTime() > b.cpd_date.getTime() ? 1 : -1
          ),
      }));

    // validate detpay sumed up pays up assigned provision
    // validate payment has all detpay sums correctly

    result.paymentList = allPayments.sort((a, b) =>
      a.cpy_date.getTime() > b.cpy_date.getTime() ? 1 : -1
    );

    return Promise.resolve(result);
  }

  newCarteraProvision(
    date: Date,
    amount: number = PROVISION_AMOUNT,
    unit: string | number,
    user: string,
    payed: number = 0
  ) {
    return new CarteraProvision({
      cpr_id: Utils.hashIdForEntity(new CarteraProvision(), "cpr_id"),
      cpr_id_unit: unit,
      cpr_date: date,
      cpr_concept:
        amount === 1480
          ? `Cuota de Mantenimiento ${DateUtils.getMonthNameSpanish(
              date.getMonth() + 1
            )} ${date.getFullYear()}`
          : `Penalización ${DateUtils.getMonthNameSpanish(
              date.getMonth() + 1
            )} ${date.getFullYear()}`,
      cpr_code_reference: `${CODE_NORMAL}|${date.getFullYear()}-${Utils.pad(
        date.getMonth() + 1,
        "0",
        2,
        -1
      )}`,
      cpr_amount: amount,
      cpr_payed: payed,
      cpr_remaining: amount - payed,
      cpr_id_user: user,
      cpr_date_add: DateUtils.newDateUpToSeconds(),
      cpr_date_mod: DateUtils.newDateUpToSeconds(),
      cpr_ctg_status: 1,
    });
  }

  newCarteraPayment(
    date: Date,
    amount: number,
    unit: string | number,
    user: string
  ) {
    return new CarteraPayment({
      cpy_id: Utils.hashIdForEntity(new CarteraPayment(), "cpy_id"),
      cpy_ctg_type: 1,
      cpy_date: date,
      cpy_amount: amount,
      cpy_description: "Pago",
      cpy_match_hint: `cuota-normal|${date.getFullYear()}-${Utils.pad(
        date.getMonth() + 1,
        "0",
        2,
        -1
      )}|${unit}`,
      cpy_ctg_non_identified: 1,
      cpy_date_identification: null,
      cpy_id_user: user,
      cpy_date_add: DateUtils.newDateUpToSeconds(),
      cpy_date_mod: DateUtils.newDateUpToSeconds(),
      cpy_ctg_status: 1,
    });
  }

  newCarteraPayDet(
    unit: string | number,
    amount: number,
    date: Date,
    provisionId: string,
    paymentId: string,
    user: string
  ) {
    return new CarteraPayDet({
      cpd_id: Utils.hashIdForEntity(new CarteraPayDet(), "cpd_id"),
      cpd_id_provision: provisionId,
      cpd_id_payment: paymentId,
      cpd_amount: amount,
      cpd_id_user: user,
      cpd_date_add: DateUtils.newDateUpToSeconds(),
      cpd_date_mod: DateUtils.newDateUpToSeconds(),
      cpd_ctg_status: 1,
      cpd_id_unit: unit,
      cpd_ctg_type: 1,
      cpd_date: date,
    });
  }

  buildProvisions({
    provisionAmount = PROVISION_AMOUNT,
    unit,
    user,
    from,
    to,
    includePenalization = false,
    penalizationAmount = PENALIZATION_AMOUNT,
    exclusions = [],
    penalizationExclusions = [],
  }: {
    provisionAmount?: number;
    unit: string | number;
    user: string;
    from: string;
    to: string;
    includePenalization?: boolean;
    penalizationAmount?: number;
    exclusions?: string[];
    penalizationExclusions?: string[];
  }): CarteraProvision[] {
    const provisionList: CarteraProvision[] = [];

    const parseDateReference = (value: string) =>
      parseInt(value.replace("-", "")); // 2020-05 -> 202005

    let currentPeriod: number = parseDateReference(from);
    while (currentPeriod <= parseDateReference(to)) {
      const year: number = Math.floor(currentPeriod / 100);
      const month: number =
        currentPeriod - Math.floor(currentPeriod / 100) * 100;

      if (!exclusions.some((e) => parseDateReference(e) === currentPeriod)) {
        provisionList.push(
          this.newCarteraProvision(
            new Date(year, month - 1, 1),
            provisionAmount,
            unit,
            user
          )
        );
      }

      // include penalization
      if (includePenalization) {
        if (
          !penalizationExclusions.some(
            (e) => parseDateReference(e) === currentPeriod
          )
        ) {
          provisionList.push(
            this.newCarteraProvision(
              new Date(year, month - 1, 16),
              penalizationAmount,
              unit,
              user
            )
          );
        }
      }

      // move to next period
      currentPeriod = month === 12 ? (year + 1) * 100 + 1 : currentPeriod + 1;
    }

    return provisionList;
  }

  buildPayments({
    unit,
    user,
    paymentData,
    provisionList,
    paymentList,
    payDetList,
  }: {
    unit: string | number;
    user: string;
    paymentData: Array<{
      date: string;
      amount?: number;
      applyTo: Array<{
        dateReference?: string;
        amount?: number;
        type?: string;
      }>;
    }>;
    provisionList: CarteraProvision[];
    paymentList: CarteraPayment[];
    payDetList: CarteraPayDet[];
  }): { paymentList: CarteraPayment[]; payDetList: CarteraPayDet[] } {
    const result: {
      paymentList: CarteraPayment[];
      payDetList: CarteraPayDet[];
    } = {
      paymentList: [],
      payDetList: [],
    };

    const getProvisionFromDateReference = (
      dateReference: string,
      provisions: CarteraProvision[],
      type: string = "normal"
    ) => {
      const year: number = parseInt(dateReference.substr(0, 4));
      const month: number = parseInt(dateReference.substr(5, 2));
      const date: Date = new Date(year, month - 1, type === "normal" ? 1 : 16);

      return provisions.find(
        (e) =>
          e.cpr_date.getTime() === date.getTime() &&
          (type === "normal"
            ? e.cpr_amount === PROVISION_AMOUNT
            : e.cpr_amount === PENALIZATION_AMOUNT)
      );
    };

    paymentData.forEach(
      ({
        date: dateString,
        amount: paymentAmount = PROVISION_AMOUNT,
        applyTo = [],
      }) => {
        const payDate: Date = DateUtils.stringDateToDate(dateString);

        // look for existing payment and remove it
        if (
          paymentList.some(
            (e) =>
              e.cpy_date.getTime() === payDate.getTime() &&
              e.cpy_amount === paymentAmount
          )
        ) {
          const pay = paymentList.find(
            (e) =>
              e.cpy_date.getTime() === payDate.getTime() &&
              e.cpy_amount === paymentAmount
          );
          payDetList
            .filter((e) => e.cpd_id_payment === pay.cpy_id)
            .forEach((e) => {
              const prov = provisionList.find(
                (i) => i.cpr_id === e.cpd_id_provision
              );

              if (prov) {
                prov.cpr_payed -= e.cpd_amount;
                prov.cpr_remaining += e.cpd_amount;
              }

              payDetList.splice(
                payDetList.findIndex((i) => i.cpd_id === e.cpd_id),
                1
              );
            });
          paymentList.splice(
            paymentList.findIndex(
              (e) =>
                e.cpy_date.getTime() === payDate.getTime() &&
                e.cpy_amount === paymentAmount
            ),
            1
          );
        }

        const newPayment = this.newCarteraPayment(
          payDate,
          paymentAmount,
          unit,
          user
        );
        result.paymentList.push(newPayment);

        if (applyTo.length) {
          applyTo.forEach(
            ({
              dateReference,
              amount: payDetAmount = paymentAmount,
              type = "normal",
            }) => {
              const provision: CarteraProvision = getProvisionFromDateReference(
                dateReference || dateString,
                provisionList,
                type
              );

              if (!provision) {
                const msg = `No provision found for dateReference ${dateReference}, unit ${unit}`;
                console.error(msg);
                // throw new Error(msg);
              } else {
                result.payDetList.push(
                  this.newCarteraPayDet(
                    unit,
                    payDetAmount,
                    payDate,
                    provision && provision.cpr_id,
                    newPayment.cpy_id,
                    user
                  )
                );

                provision.cpr_payed += payDetAmount;
                provision.cpr_remaining -= payDetAmount;

                // if payment date is for same date-month and prior to day 15, remove penalization
                if (
                  payDate.getFullYear() * 100 + payDate.getMonth() + 1 ===
                    provision.cpr_date.getFullYear() * 100 +
                      provision.cpr_date.getMonth() +
                      1 &&
                  payDate.getDate() <= 15 &&
                  provision.cpr_remaining < 0.01
                ) {
                  const penalization = getProvisionFromDateReference(
                    dateReference || dateString,
                    provisionList,
                    "penalization"
                  );
                  if (penalization) {
                    provisionList.splice(
                      provisionList.findIndex(
                        (e) => e.cpr_id === penalization.cpr_id
                      ),
                      1
                    );
                  }
                }
              }
            }
          );
        }
      }
    );

    return result;
  }

  addSpecificProvisionsAndPayments402CurrentDBApplication(
    provisionList: CarteraProvision[],
    paymentList: CarteraPayment[],
    payDetList: CarteraPayDet[]
  ) {
    const config = {
      unit: 402,
      user: "mycomplexsoul",
    };

    const newProvisionList = this.buildProvisions({
      from: "2019-01",
      to: "2019-10",
      includePenalization: true,
      unit: config.unit,
      user: config.user,
      exclusions: ["2019-04"],
      penalizationExclusions: ["2019-02", "2019-04", "2019-08"],
    });

    const payments = [
      {
        date: "2019-01-15",
        applyTo: [{}],
      },
      {
        date: "2019-03-11",
        applyTo: [{ dateReference: "2019-02" }],
      },
      {
        date: "2019-03-11",
        applyTo: [{}],
      },
      {
        date: "2019-05-14",
        applyTo: [{ dateReference: "2019-05" }], // current application
      },
      {
        date: "2019-06-10",
        applyTo: [{ dateReference: "2019-06" }], // current application
      },
      {
        date: "2019-07-11",
        applyTo: [{ dateReference: "2019-07" }], // current application
      },
      {
        date: "2019-08-27",
        applyTo: [{ dateReference: "2019-08" }], // current application
      },
      {
        date: "2019-09-10",
        applyTo: [{ dateReference: "2019-09" }], // current application
      },
      {
        date: "2019-10-15",
        applyTo: [{ dateReference: "2019-10" }], // current application
      },
      /*{
        date: "2019-11-08",
        applyTo: [{ dateReference: '2019-11' }] // current application
      },
      {
        date: "2019-11-27",
        applyTo: [{ dateReference: '2019-12' }] // current application
      },
      {
        date: "2019-12-11",
        applyTo: [{ dateReference: '2020-01' }] // current application
      },*/
    ];
    newProvisionList.forEach((e) => provisionList.push(e));

    const newPaymentList = this.buildPayments({
      unit: config.unit,
      user: config.user,
      paymentData: payments,
      provisionList,
      paymentList,
      payDetList,
    });

    newPaymentList.paymentList.forEach((e) => paymentList.push(e));
    newPaymentList.payDetList.forEach((e) => payDetList.push(e));
  }

  addSpecificProvisionsAndPayments402PropietaryDesiredApplication(
    provisionList: CarteraProvision[],
    paymentList: CarteraPayment[],
    payDetList: CarteraPayDet[]
  ) {
    const config = {
      unit: 402,
      user: "mycomplexsoul",
    };

    const newProvisionList = this.buildProvisions({
      from: "2019-01",
      to: "2019-10",
      includePenalization: true,
      unit: config.unit,
      user: config.user,
      exclusions: ["2019-04"],
      penalizationExclusions: ["2019-02", "2019-04", "2019-08"],
    });
    newProvisionList.push(
      this.newCarteraProvision(
        new Date(2020, 1, 16),
        PENALIZATION_AMOUNT,
        config.unit,
        config.user
      )
    );
    newProvisionList.push(
      this.newCarteraProvision(
        new Date(2020, 2, 16),
        PENALIZATION_AMOUNT,
        config.unit,
        config.user
      )
    );

    const payments = [
      {
        date: "2019-01-15",
        applyTo: [{}],
      },
      {
        date: "2019-03-11",
        applyTo: [{ dateReference: "2019-02" }],
      },
      {
        date: "2019-03-11",
        applyTo: [{}],
      },
      {
        date: "2019-05-14",
        applyTo: [{ dateReference: "2019-05" }], // current application
      },
      {
        date: "2019-06-10",
        applyTo: [{ dateReference: "2019-04" }], // changed
      },
      {
        date: "2019-07-11",
        applyTo: [{ dateReference: "2019-06" }], // changed
      },
      {
        date: "2019-08-27",
        applyTo: [{ dateReference: "2019-07" }], // changed
      },
      {
        date: "2019-09-10",
        applyTo: [{ dateReference: "2019-09" }], // current application
      },
      {
        date: "2019-10-15",
        applyTo: [{ dateReference: "2019-10" }], // current application
      },
      {
        date: "2019-11-08",
        applyTo: [{ dateReference: "2019-11" }], // current application
      },
      {
        date: "2019-11-27",
        applyTo: [{ dateReference: "2019-08" }], // changed
      },
      {
        date: "2019-12-11",
        applyTo: [{ dateReference: "2019-12" }], // changed
      },
      {
        date: "2020-01-15",
        applyTo: [{ dateReference: "2020-01" }], // changed
      },
      {
        date: "2020-02-18",
        applyTo: [{ dateReference: "2020-02" }], // changed
      },
    ];
    newProvisionList.forEach((e) => provisionList.push(e));

    const newPaymentList = this.buildPayments({
      unit: config.unit,
      user: config.user,
      paymentData: payments,
      provisionList,
      paymentList,
      payDetList,
    });

    newPaymentList.paymentList.forEach((e) => paymentList.push(e));
    newPaymentList.payDetList.forEach((e) => payDetList.push(e));
  }

  addSpecificProvisionsAndPayments(
    provisionList: CarteraProvision[],
    paymentList: CarteraPayment[],
    payDetList: CarteraPayDet[]
  ) {
    // unit 301
    const newProvision = (
      unit: string,
      date: Date,
      amount: number,
      payed: number,
      user: string = "mycomplexsoul"
    ) =>
      new CarteraProvision({
        cpr_id: Utils.hashIdForEntity(new CarteraProvision(), "cpr_id"),
        cpr_id_unit: unit,
        cpr_date: date,
        cpr_concept:
          amount === 1480
            ? `Cuota de Mantenimiento ${DateUtils.getMonthNameSpanish(
                date.getMonth() + 1
              )} ${date.getFullYear()}`
            : `Penalización ${DateUtils.getMonthNameSpanish(
                date.getMonth() + 1
              )} ${date.getFullYear()}`,
        cpr_code_reference: `${CODE_NORMAL}|${date.getFullYear()}-${Utils.pad(
          date.getMonth() + 1,
          "0",
          2,
          -1
        )}`,
        cpr_amount: amount,
        cpr_payed: payed,
        cpr_remaining: amount - payed,
        cpr_id_user: user,
        cpr_date_add: DateUtils.newDateUpToSeconds(),
        cpr_date_mod: DateUtils.newDateUpToSeconds(),
        cpr_ctg_status: 1,
      });

    const newPayment = (
      unit: string,
      date: Date,
      amount: number,
      user: string = "mycomplexsoul"
    ) =>
      new CarteraPayment({
        cpy_id: Utils.hashIdForEntity(new CarteraPayment(), "cpy_id"),
        cpy_ctg_type: 1,
        cpy_date: date,
        cpy_amount: amount,
        cpy_description: "Pago",
        cpy_match_hint: `cuota-normal|${date.getFullYear()}-${Utils.pad(
          date.getMonth() + 1,
          "0",
          2,
          -1
        )}|${unit}`,
        cpy_ctg_non_identified: 1,
        cpy_date_identification: null,
        cpy_id_user: user,
        cpy_date_add: DateUtils.newDateUpToSeconds(),
        cpy_date_mod: DateUtils.newDateUpToSeconds(),
        cpy_ctg_status: 1,
      });

    const newPayDet = (
      unit: string,
      amount: number,
      provisionId: string,
      paymentId: string,
      user: string = "mycomplexsoul"
    ) =>
      new CarteraPayDet({
        cpd_id: Utils.hashIdForEntity(new CarteraPayDet(), "cpd_id"),
        cpd_id_provision: provisionId,
        cpd_id_payment: paymentId,
        cpd_amount: amount,
        cpd_id_user: user,
        cpd_date_add: DateUtils.newDateUpToSeconds(),
        cpd_date_mod: DateUtils.newDateUpToSeconds(),
        cpd_ctg_status: 1,
        cpd_id_unit: unit,
        cpd_ctg_type: 1,
      });

    const unit = "301";
    const QUOTA = 1480;
    const PENA = 148;

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-01-01"), QUOTA, QUOTA)
    );
    const provEne = provisionList[provisionList.length - 1].cpr_id;

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-01-16"), PENA, PENA)
    );
    const provEnePena = provisionList[provisionList.length - 1].cpr_id;

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-02-01"), QUOTA, QUOTA)
    );
    const provFeb = provisionList[provisionList.length - 1].cpr_id;

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-02-16"), PENA, PENA)
    );
    const provFebPena = provisionList[provisionList.length - 1].cpr_id;

    paymentList.push(
      newPayment(unit, DateUtils.stringDateToDate("2019-02-19"), 2760)
    );

    payDetList.push(
      newPayDet(
        unit,
        QUOTA,
        provEne,
        paymentList[paymentList.length - 1].cpy_id
      )
    );
    payDetList.push(
      newPayDet(
        unit,
        PENA,
        provEnePena,
        paymentList[paymentList.length - 1].cpy_id
      )
    );
    payDetList.push(
      newPayDet(unit, 1132, provFeb, paymentList[paymentList.length - 1].cpy_id)
    );

    const provMar = provisionList.find(
      (p) =>
        p.cpr_id_unit === unit &&
        p.cpr_date.getTime() ===
          DateUtils.stringDateToDate("2019-03-01").getTime()
    );
    provMar.cpr_payed = QUOTA - provMar.cpr_remaining;
    provMar.cpr_amount = QUOTA;

    paymentList.push(
      newPayment(unit, DateUtils.stringDateToDate("2019-03-19"), 1628)
    );

    payDetList.push(
      newPayDet(
        unit,
        PENA,
        provFebPena,
        paymentList[paymentList.length - 1].cpy_id
      )
    );
    payDetList.push(
      newPayDet(unit, 348, provFeb, paymentList[paymentList.length - 1].cpy_id)
    );
    payDetList.push(
      newPayDet(
        unit,
        1132,
        provMar.cpr_id,
        paymentList[paymentList.length - 1].cpy_id
      )
    );

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-04-01"), QUOTA, QUOTA)
    );

    paymentList.push(
      newPayment(unit, DateUtils.stringDateToDate("2019-04-04"), QUOTA)
    );

    payDetList.push(
      newPayDet(
        unit,
        QUOTA,
        provisionList[provisionList.length - 1].cpr_id,
        paymentList[paymentList.length - 1].cpy_id
      )
    );

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-05-01"), QUOTA, QUOTA)
    );

    paymentList.push(
      newPayment(unit, DateUtils.stringDateToDate("2019-05-09"), QUOTA)
    );

    payDetList.push(
      newPayDet(
        unit,
        QUOTA,
        provisionList[provisionList.length - 1].cpr_id,
        paymentList[paymentList.length - 1].cpy_id
      )
    );

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-06-01"), QUOTA, QUOTA)
    );

    paymentList.push(
      newPayment(unit, DateUtils.stringDateToDate("2019-06-04"), QUOTA)
    );

    payDetList.push(
      newPayDet(
        unit,
        QUOTA,
        provisionList[provisionList.length - 1].cpr_id,
        paymentList[paymentList.length - 1].cpy_id
      )
    );

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-07-01"), QUOTA, QUOTA)
    );

    paymentList.push(
      newPayment(unit, DateUtils.stringDateToDate("2019-07-03"), QUOTA)
    );

    payDetList.push(
      newPayDet(
        unit,
        QUOTA,
        provisionList[provisionList.length - 1].cpr_id,
        paymentList[paymentList.length - 1].cpy_id
      )
    );

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-08-01"), QUOTA, QUOTA)
    );

    paymentList.push(
      newPayment(unit, DateUtils.stringDateToDate("2019-08-01"), QUOTA)
    );

    payDetList.push(
      newPayDet(
        unit,
        QUOTA,
        provisionList[provisionList.length - 1].cpr_id,
        paymentList[paymentList.length - 1].cpy_id
      )
    );

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-09-01"), QUOTA, QUOTA)
    );

    paymentList.push(
      newPayment(unit, DateUtils.stringDateToDate("2019-09-04"), QUOTA)
    );

    payDetList.push(
      newPayDet(
        unit,
        QUOTA,
        provisionList[provisionList.length - 1].cpr_id,
        paymentList[paymentList.length - 1].cpy_id
      )
    );

    provisionList.push(
      newProvision(unit, DateUtils.stringDateToDate("2019-10-01"), QUOTA, QUOTA)
    );

    paymentList.push(
      newPayment(unit, DateUtils.stringDateToDate("2019-10-09"), QUOTA)
    );

    payDetList.push(
      newPayDet(
        unit,
        QUOTA,
        provisionList[provisionList.length - 1].cpr_id,
        paymentList[paymentList.length - 1].cpy_id
      )
    );
  }

  /**
   * @deprecated This was used once, should delete
   */
  changeConceptToSpanishHandler(node: iNode) {
    this.changeConceptToSpanish().then(() => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
        })
      );
    });
  }
  /**
   * @deprecated This was used once, should delete
   */
  async changeConceptToSpanish(): Promise<boolean> {
    const allProvisions: CarteraProvision[] = await getProvisions();
    const allPayments: CarteraPayment[] = await getPayments();

    const connection: iConnection = ConnectionService.getConnection();
    const ApiProvision: ApiModule = new ApiModule(new CarteraProvision());
    allProvisions.forEach(async (prov) => {
      const [code, yearMonth] = prov.cpr_code_reference.split("|");
      const [year, month] = yearMonth.split("-").map((i) => parseInt(i, 10));
      prov.cpr_concept = this.buildConcept(
        mapCodeWithDescription[code],
        year,
        month
      );
      await ApiProvision.update(
        {
          body: Utils.entityToRawTableFields(prov),
          pk: Utils.getPKFromEntity(prov),
        },
        {},
        prov,
        connection
      );
    });

    const ApiPayments: ApiModule = new ApiModule(new CarteraPayment());
    allPayments.forEach(async (payment) => {
      const [code, yearMonth] = payment.cpy_match_hint.split("|");
      const [year, month] = yearMonth.split("-").map((i) => parseInt(i, 10));
      payment.cpy_description = this.buildConcept(
        mapCodeWithDescription[code],
        year,
        month
      );
      await ApiPayments.update(
        {
          body: Utils.entityToRawTableFields(payment),
          pk: Utils.getPKFromEntity(payment),
        },
        {},
        payment,
        connection
      );
    });

    connection.close();

    return Promise.resolve(true);
  }

  registerMonthlyIncomeHandler(node: iNode) {
    const { year, month, user } = node.request.body;

    this.registerMonthlyIncome(year, month, user).then((response) => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
          movementList: response.map(Utils.entityToRawTableFields),
        })
      );
    });
  }

  async registerMonthlyIncome(
    year: number,
    month: number,
    user: string
  ): Promise<Movement[]> {
    const apiModule: ApiModule = new ApiModule(null);
    const initialDate: Date = new Date(year, month - 1, 1, 0, 0, 0);
    const finalDate: Date = new Date(year, month, 1, 0, 0, 0);

    const sumPaymentList: Array<{
      unit: string;
      concept: string;
      date: Date;
      amount: number;
      payId: string;
      folio: string;
    }> = await apiModule
      .listWithSQL({
        // Get payDet info which is already assigned by type
        // Also gets non-identified payments
        sql: `SELECT cpd_id_unit as unit,
          cpd_code_reference as concept,
          cpd_date_payment as date,
          cpd_amount as amount,
          cpr_folio as folio,
          cpd_id as payid,
          cpd_date_mod as date_mod
        FROM vicarterapaydet
        LEFT JOIN movement on (SUBSTR(mov_notes, 1, INSTR(mov_notes, '||')-1) = cpd_id)
        LEFT JOIN carteraprovision on (cpr_id = cpd_id_provision)
        WHERE
          cpd_ctg_type = 1
          and mov_id is null
          and cpd_date_payment >= '${DateUtils.formatDate(
            initialDate,
            "yyyy-MM-dd"
          )}'
          and cpd_date_payment < '${DateUtils.formatDate(
            finalDate,
            "yyyy-MM-dd"
          )}'
        
        UNION ALL
        
        SELECT '${CODE_NONE}' as unit,
          cpy_match_hint as concept,
          cpy_date as date,
          cpy_amount as amount,
          null as folio,
          cpy_id as payid,
          cpy_date_mod as date_mod
        FROM carterapayment
        LEFT JOIN movement on (SUBSTR(mov_notes, 1, INSTR(mov_notes, '||')-1) = cpy_id)
        WHERE
          cpy_date >= '${DateUtils.formatDate(initialDate, "yyyy-MM-dd")}'
          and cpy_date < '${DateUtils.formatDate(finalDate, "yyyy-MM-dd")}'
          and SUBSTR(cpy_match_hint, -3) = '000'
          and mov_id is null
        order by date_mod, date, unit`,
      })
      .then((response) =>
        response.map((e) => ({
          unit: e["unit"],
          concept: e["concept"],
          date: new Date(e["date"]),
          amount: e["amount"],
          payId: e["payid"],
          folio: e["folio"],
        }))
      );

    const params = {
      account_id: "acc2020040520302", // Fondo
      category_id: "mct20200405203206-356263334002", // Recaudación
      place_id: "mpl20200405203255-686190649216", // Condominio
    };

    // create an income movement for each sum item
    const movementList: Movement[] = sumPaymentList.map(
      ({ unit, concept, date, amount, payId, folio }) =>
        new Movement({
          mov_id: Utils.hashIdForEntity(new Movement(), "mov_id"),
          mov_date: date,
          mov_ctg_currency: 1,
          mov_amount: amount,
          mov_id_account: params.account_id,
          mov_id_account_to: null,
          mov_ctg_type: 2, // income
          mov_budget: folio, // folio
          mov_id_category: params.category_id,
          mov_id_place: params.place_id,
          mov_desc:
            unit === CODE_NONE
              ? mapCodeWithDescription[CODE_NONE]
              : `${
                  mapCodeWithDescription[
                    this.getCodeFromProvisionCodeReference(concept)
                  ]
                } ${DateUtils.getMonthNameSpanish(
                  this.getYearMonthFromProvisionCodeReference(concept).month
                )} ${this.getYearMonthFromProvisionCodeReference(concept).year} ${unit === CODE_NONE ? "000" : unit}`,
          mov_notes: `${payId}||${concept}|${
            unit === CODE_NONE ? "000" : unit
          }`,
          mov_id_user: user,
          mov_date_add: DateUtils.newDateUpToSeconds(),
          mov_date_mod: DateUtils.newDateUpToSeconds(),
          mov_ctg_status: 1,
        })
    );

    // Register movements
    const movementServer: MovementCustom = new MovementCustom();

    for await (const mov of movementList) {
      movementServer
        .create({ body: mov })
        .catch((err) =>
          console.log(`Error registering movement for cartera payment`, err)
        );
    }

    return Promise.resolve(movementList);
  }

  getCodeFromProvisionCodeReference(code_reference: string): string {
    return code_reference.split("|")[0];
  }

  getYearMonthFromProvisionCodeReference(
    code_reference: string
  ): { year: number; month: number } {
    const result = code_reference
      .split("|")[1]
      .split("-")
      .map((n) => parseInt(n, 10));
    return {
      year: result[0],
      month: result[1],
    };
  }

  resultsForMonthHandler(node: iNode) {
    const { year, month } = node.request.query as any;

    this.resultsForMonth(year, month).then(async (response) => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
          initialBalance: await this.getInitialBalanceForMonth(
            year,
            month,
            "acc2020040520302"
          ),
          movementList: response,
          timeline: await this.getTimeline(
            `cartera-results|${year}-${month}`
          ).then((list) => list.map(Utils.entityToRawTableFields)),
        })
      );
    });
  }

  async resultsForMonth(
    year: number,
    month: number
  ): Promise<
    Array<{
      concept: string;
      amount: number;
      type: string;
    }>
  > {
    const apiModule: ApiModule = new ApiModule(null);
    const initialDate: Date = new Date(year, month - 1, 1, 0, 0, 0);
    const finalDate: Date = new Date(year, month, 1, 0, 0, 0);

    const config = {
      dateFilter: `mov_date >= '${DateUtils.formatDate(
        initialDate,
        "yyyy-MM-dd"
      )}'
      and mov_date < '${DateUtils.formatDate(finalDate, "yyyy-MM-dd")}'`,
      account_id: "acc2020040520302",
    };
    const mapCodeWithDescription = {
      [CODE_NORMAL]: "Cuotas de Mantenimiento",
      [CODE_PENALIZATION]: "Penalizaciones",
      [CODE_EXTRA]: "Cuotas Extraordinarias",
      [CODE_EXTRA_PENALIZATION]: "Penalizaciones de Cuotas Extraordinarias",
      [CODE_NONE]: "Cuotas pendientes de identificar",
    };

    const movementList: Array<{
      concept: string;
      amount: number;
      type: string;
    }> = await apiModule
      .listWithSQL({
        // Get total income from payments, total income for non-identified payments
        // income from other movements and expenses
        sql: `SELECT 
        SUBSTR(mov_notes, INSTR(mov_notes, '||')+2, INSTR(mov_notes, '|2')-INSTR(mov_notes, '||')-2) as concept,
        sum(mov_amount) as amount,
        'code-income' as type
        FROM movement
        WHERE 
        ${config.dateFilter}
        and mov_id_account = '${config.account_id}'
        and mov_ctg_type = 2
        and SUBSTR(mov_notes, -3) != '000'
        group by SUBSTR(mov_notes, INSTR(mov_notes, '||')+2, INSTR(mov_notes, '|2')-INSTR(mov_notes, '||')-2)
        
        UNION ALL
        
        SELECT 
        'none' as concept,
        sum(mov_amount) as amount,
        'none-income' as type
        FROM movement
        WHERE 
        ${config.dateFilter}
        and mov_id_account = '${config.account_id}'
        and mov_ctg_type = 2
        and SUBSTR(mov_notes, -3) = '000'
        group by SUBSTR(mov_notes, -3) = '000'
        
        UNION ALL
        
        SELECT 
        mov_desc as concept,
        mov_amount as amount,
        'income' as type
        FROM movement
        WHERE 
        ${config.dateFilter}
        and mov_id_account = '${config.account_id}'
        and mov_ctg_type = 2
        and mov_notes is null
        
        UNION ALL
        
        SELECT 
        mov_desc as concept,
        mov_amount as amount,
        'expense' as type
        FROM movement
        WHERE 
        ${config.dateFilter}
        and mov_id_account = '${config.account_id}'
        and mov_ctg_type = 1`,
      })
      .then((response) =>
        response.map((e) => ({
          concept: e["type"].includes("-")
            ? mapCodeWithDescription[e["concept"]]
            : e["concept"],
          amount: e["amount"],
          type: e["type"],
        }))
      );

    return Promise.resolve(movementList);
  }

  async getInitialBalanceForMonth(
    year: number,
    month: number,
    account_id: string
  ): Promise<number> {
    const apiModule: ApiModule = new ApiModule(new Balance());

    const balanceList = await apiModule
      .listWithSQL({
        sql: `select * from balance
       where bal_id_account = '${account_id}'
       and bal_year = ${year}
       and bal_month = ${month}`,
      })
      .then((response) => response.map((e) => new Balance(e)));

    return Promise.resolve(
      balanceList.reduce(
        (previous: number, current: Balance) => current.bal_initial,
        0
      )
    );
  }

  getTimeline(
    recordId: string,
    connectionInstance?: iConnection
  ): Promise<Timeline[]> {
    const sqlMotor: MoSQL = new MoSQL(new Timeline());
    const connection: iConnection = connectionInstance
      ? connectionInstance
      : ConnectionService.getConnection();

    const filter = {
      gc: "AND",
      cont: [
        {
          f: "tim_id_record",
          op: "eq",
          val: recordId,
        },
      ],
    };

    return connection
      .runSql(sqlMotor.toSelectSQL(JSON.stringify(filter)))
      .then((response) => {
        return (
          (response.rows && response.rows.map((e) => new Timeline(e))) || []
        );
      });
  }

  savePaymentAndPayDetHandler(node: iNode) {
    // payDetList: [{ "<provision_id>": <payment_amount> }, ...]
    const { payment, payDetList, payDetFolioList } = node.request.body;

    this.savePaymentAndPayDet(payment, payDetList, payDetFolioList).then(
      (data) => {
        node.response.end(
          JSON.stringify({
            operationOk: true,
            payment: Utils.entityToRawTableFields(data.payment),
            payDetList: data.payDetList.map(Utils.entityToRawTableFields),
          })
        );
      }
    );
  }

  buildMatchHint(date: Date | string, unit: string | number): string {
    const match_hint = `cuota-normal|${new Date(
      date
    ).getFullYear()}-${Utils.pad(
      new Date(date).getMonth() + 1,
      "0",
      2,
      -1
    )}|${unit}`;
    return match_hint;
  }

  async savePaymentAndPayDet(
    { paymentType, date, amount, unit, description, user, paymentId },
    payDetList: any,
    payDetFolioList: any
  ): Promise<{
    payment: CarteraPayment;
    payDetList: CarteraPayDet[];
  }> {
    const connectionInstance: iConnection = ConnectionService.getConnection();
    let paymentInstance: CarteraPayment;

    if (paymentType === "identification") {
      // we should update the payment
      paymentInstance = await connectionInstance
        .runSql(
          new MoSQL(new CarteraPayment({ cpy_id: paymentId })).toSelectPKSQL()
        )
        .then((response) => response.rows.map((r) => new CarteraPayment(r)))
        .then((list) => (list.length ? list[0] : null));

      // add identification details
      paymentInstance.cpy_description = description;
      paymentInstance.cpy_match_hint = this.buildMatchHint(
        paymentInstance.cpy_date,
        unit
      );
      paymentInstance.cpy_date_identification = DateUtils.stringDateToDate(
        date
      );
      paymentInstance.cpy_date_mod = DateUtils.newDateUpToSeconds();
    } else {
      // create payment
      paymentInstance = new CarteraPayment({
        cpy_id: Utils.hashIdForEntity(new CarteraPayment(), "cpy_id"),
        cpy_ctg_type: paymentType === "condonation" ? 2 : 1,
        cpy_date: DateUtils.stringDateToDate(date),
        cpy_amount: amount,
        cpy_description: description,
        cpy_match_hint: this.buildMatchHint(date, unit),
        cpy_ctg_non_identified: 1,
        cpy_date_identification: DateUtils.stringDateToDate(date),
        cpy_id_user: user,
        cpy_date_add: DateUtils.newDateUpToSeconds(),
        cpy_date_mod: DateUtils.newDateUpToSeconds(),
        cpy_ctg_status: 1,
      });
    }

    const payDetListInstance: CarteraPayDet[] = Object.keys(payDetList).map(
      (id) =>
        new CarteraPayDet({
          cpd_id: Utils.hashIdForEntity(new CarteraPayDet(), "cpd_id"),
          cpd_id_provision: id,
          cpd_id_payment: paymentInstance.cpy_id,
          cpd_amount: payDetList[id],
          cpd_id_user: user,
          cpd_date_add: DateUtils.newDateUpToSeconds(),
          cpd_date_mod: DateUtils.newDateUpToSeconds(),
          cpd_ctg_status: 1,
        })
    );

    // save to DB
    const apiModule: ApiModule = new ApiModule(paymentInstance);
    const provisionList: CarteraProvision[] =
      payDetListInstance.length > 0
        ? await apiModule
            .listWithSQL({
              sql: `select * from vicarteraprovision
      where cpr_id in (${Object.keys(payDetList).reduce(
        (prev, curr) => `${prev ? `${prev}, ` : ""}'${curr}'`,
        null
      )})`,
            })
            .then((list) => list.map((d) => new CarteraProvision(d)))
        : [];

    const afterInsertOK = (responseCreate, model: CarteraPayment) => {
      return Promise.all(
        payDetListInstance.map((d) =>
          apiModule.create(
            { body: d },
            {
              afterInsertOK: (responseDet, detModel: CarteraPayDet) => {
                const provision: CarteraProvision = provisionList.find(
                  (p) => p.cpr_id === d.cpd_id_provision
                );
                return apiModule.update(
                  {
                    body: {
                      ...provision,
                      cpr_condoned:
                        paymentType === "condonation"
                          ? provision.cpr_condoned + d.cpd_amount
                          : provision.cpr_condoned,
                      cpr_payed:
                        paymentType === "condonation"
                          ? provision.cpr_payed
                          : provision.cpr_payed + d.cpd_amount,
                      cpr_remaining:
                        provision.cpr_amount -
                        provision.cpr_condoned -
                        provision.cpr_payed -
                        d.cpd_amount,
                      cpr_folio: payDetFolioList[provision.cpr_id] || null,
                      cpr_date_mod: DateUtils.newDateUpToSeconds(),
                    },
                    pk: {
                      ...Utils.getPKFromEntity(provision),
                    },
                  },
                  {},
                  provision
                );
              },
            },
            d
          )
        )
      );
    };

    const method =
      paymentType === "identification" ? apiModule.update : apiModule.create;

    return method(
      {
        body: paymentInstance,
        pk:
          paymentType === "identification"
            ? {
                cpy_id: paymentId,
              }
            : undefined,
      },
      {
        afterInsertOK,
        afterUpdateOK: afterInsertOK,
      },
      paymentInstance
    ).then(async (response) => {
      await this.registerMonthlyIncome(
        paymentInstance.cpy_date_identification.getFullYear(),
        paymentInstance.cpy_date_identification.getMonth() + 1,
        user
      );

      return Promise.resolve({
        payment: paymentInstance,
        payDetList: payDetListInstance,
        provisionList,
      });
    });
  }

  async getProvisionPaymentListing(
    year: number,
    month: number
  ): Promise<{
    provisionList: Array<{
      provision: CarteraProvision;
      previousPayDetList: CarteraPayDet[];
      paymentList: Array<{
        payment: CarteraPayment;
        payDetList: CarteraPayDet[];
      }>;
    }>;
  }> {
    const provisionList: CarteraProvision[] = await getProvisions();
    const paymentList: CarteraPayment[] = await getPayments();
    const payDetList: CarteraPayDet[] = await getPayDetList();

    const initialDate: Date = new Date(year, month - 1, 1);
    const finalDate: Date = new Date(year, month, 1);

    const listing = {
      provisionList: provisionList
        .filter(
          (item) =>
            initialDate.getTime() <= item.cpr_date.getTime() &&
            item.cpr_date.getTime() < finalDate.getTime() &&
            item.cpr_date.getDate() === 1 &&
            item.cpr_code_reference.includes("cuota-normal|")
        )
        .sort((a, b) => (a.cpr_id_unit > b.cpr_id_unit ? 1 : -1))
        .map((provision) => ({
          provision,
          previousPayDetList: payDetList
            .filter( // Provisions that had a payment up until provided month
              (pd) =>
                pd.cpd_id_provision === provision.cpr_id &&
                pd.cpd_date_payment.getTime() < initialDate.getTime()
            )
            .sort((a, b) =>
              a.cpd_date.getTime() > b.cpd_date.getTime() ? 1 : -1
            ).concat(provisionList
              .filter( // Normal provisions that have a payed amount for following months
                (item) =>
                  item.cpr_id_unit === provision.cpr_id_unit &&
                  finalDate.getTime() <= item.cpr_date.getTime() &&
                  item.cpr_date.getDate() === 1 &&
                  item.cpr_code_reference.includes("cuota-normal|") &&
                  item.cpr_payed > 0
              )
              .map((item) => {
                return payDetList.find(
                  (pd) => pd.cpd_id_provision === item.cpr_id
                );
              })
              .filter(item => item.cpd_date_payment.getTime() < initialDate.getTime())),
          paymentList: paymentList
            .filter(
              (item) =>
                item.cpy_match_hint.endsWith(`|${provision.cpr_id_unit}`) &&
                initialDate.getTime() <= item.cpy_date.getTime() &&
                item.cpy_date.getTime() < finalDate.getTime()
            )
            .map((payment) => ({
              payment,
              payDetList: payDetList.filter(
                (pd) => pd.cpd_id_payment === payment.cpy_id
              ),
            }))
            .sort((a, b) =>
              a.payment.cpy_date.getTime() > b.payment.cpy_date.getTime()
                ? 1
                : -1
            ),
        })),
    };

    return listing;
  }

  async getProvisionPaymentListingHandler(node: iNode) {
    const { year, month } = node.request.query as any;

    const listing = await this.getProvisionPaymentListing(year, month);

    node.response.end(
      JSON.stringify({
        operationOk: true,
        provisionList: listing.provisionList.map((item) => ({
          provision: Utils.entityToRawTableFields(item.provision),
          previousPayDetList: item.previousPayDetList.map(
            Utils.entityToRawTableFields
          ),
          paymentList: item.paymentList.map((p) => ({
            payment: Utils.entityToRawTableFields(p.payment),
            payDetList: p.payDetList.map(Utils.entityToRawTableFields),
          })),
        })),
      })
    );
  }

  async getProvisionPayedReceiptList(year: number, month: number) {
    const provisionList: CarteraProvision[] = await getProvisions();
    const payDetList: CarteraPayDet[] = await getPayDetList();
    const unitList: CarteraUnit[] = await getUnits();

    const initialDate: Date = new Date(year, month - 1, 1);
    const finalDate: Date = new Date(year, month, 1);

    const monthAbr = DateUtils.getMonthNameSpanish(initialDate.getMonth() + 1)
      .substr(0, 3)
      .toUpperCase();

    const listing = {
      provisionList: provisionList
        .filter(
          (item) => item.cpr_folio && item.cpr_folio.substr(0, 3) === monthAbr
        )
        .sort((a, b) => {
          return parseInt(a.cpr_folio.substr(6, 3)) >
            parseInt(b.cpr_folio.substr(6, 3))
            ? 1
            : -1;
        })
        .map((provision) => {
          const hash = this.generateReceiptHash(provision); // use cpr_id to generate hash
          const unit = unitList.find((u) => u.uni_id == provision.cpr_id_unit);
          const payment = payDetList
            .filter(
              (p) =>
                p.cpd_id_provision === provision.cpr_id &&
                ((initialDate.getTime() <= p.cpd_date_payment.getTime() &&
                  p.cpd_date_payment.getTime() < finalDate.getTime()) ||
                  (p.cpd_ctg_non_identified === 2 &&
                    initialDate.getTime() <=
                      p.cpd_date_identification.getTime() &&
                    p.cpd_date_identification.getTime() < finalDate.getTime()))
            )
            .sort((a, b) =>
              a.cpd_date_payment.getTime() > b.cpd_date_payment.getTime()
                ? 1
                : -1
            )[0];

          return {
            provision,
            hash: hash.encryptedData,
            name: `${unit.uni_first_name} ${unit.uni_middle_name}`,
            paymentDate: payment ? payment.cpd_date_payment : null,
          };
        })
        .filter((item) => item.paymentDate),
    };

    return listing;
  }

  async getProvisionPayedReceiptByFolio(folio: string) {
    const provisionList: CarteraProvision[] = await getProvisions();
    const payDetList: CarteraPayDet[] = await getPayDetList();
    const unitList: CarteraUnit[] = await getUnits();

    const listing = {
      provisionList: provisionList
        .filter((item) => item.cpr_folio === folio)
        .map((provision) => {
          const hash = this.generateReceiptHash(provision); // use cpr_id to generate hash
          const unit = unitList.find((u) => u.uni_id == provision.cpr_id_unit);
          const payment = payDetList
            .filter((p) => p.cpd_id_provision === provision.cpr_id)
            .sort((a, b) =>
              // Use last payment date for receipt
              a.cpd_date_payment.getTime() < b.cpd_date_payment.getTime()
                ? 1
                : -1
            )[0];

          return {
            provision,
            hash: hash.encryptedData,
            name: `${unit.uni_first_name} ${unit.uni_middle_name}`,
            paymentDate: payment ? payment.cpd_date_payment : null,
          };
        })
        .filter((item) => item.paymentDate),
    };

    return listing;
  }

  async getProvisionPayedReceiptListHandler(node: iNode) {
    const { year = null, month = null, folio = null } = node.request
      .query as any;

    let listing;
    if (folio) {
      listing = await this.getProvisionPayedReceiptByFolio(folio);
    } else {
      listing = await this.getProvisionPayedReceiptList(year, month);
    }

    node.response.end(
      JSON.stringify({
        operationOk: true,
        provisionList: listing.provisionList.map((item) => ({
          provision: Utils.entityToRawTableFields(item.provision),
          hash: item.hash,
          name: item.name,
          paymentDate: item.paymentDate,
        })),
      })
    );
  }

  generateReceiptHash(
    provision: CarteraProvision
  ): { iv: string; encryptedData: string } {
    const crypto = new Crypto();
    const { cpr_id_unit, cpr_code_reference, cpr_amount } = provision;
    const structure = `${cpr_id_unit}||${cpr_code_reference}||${cpr_amount}`;

    return crypto.encrypt(structure);
  }

  decryptReceiptHash(text): string {
    const crypto = new Crypto();

    return crypto.decrypt(text);
  }

  addSpecificProvisionsAndPayments504ExpectedApplication(
    provisionList: CarteraProvision[],
    paymentList: CarteraPayment[],
    payDetList: CarteraPayDet[]
  ) {
    const config = {
      unit: 504,
      user: "mycomplexsoul",
    };

    const payments = [
      {
        date: "2019-10-03",
        applyTo: [{ dateReference: "2019-10" }],
      },
      {
        date: "2020-01-03",
        applyTo: [{ dateReference: "2020-01" }],
      },
      {
        date: "2020-02-06",
        applyTo: [{ dateReference: "2020-02" }],
      },
    ];
    // newProvisionList.forEach((e) => provisionList.push(e));

    const newPaymentList = this.buildPayments({
      unit: config.unit,
      user: config.user,
      paymentData: payments,
      provisionList,
      paymentList,
      payDetList,
    });

    console.log("newPaymentList", newPaymentList);

    newPaymentList.paymentList.forEach((e) => {
      e.cpy_txt_status = "highlight";
      paymentList.push(e);
    });
    newPaymentList.payDetList.forEach((e) => {
      e.cpd_txt_status = "highlight";

      payDetList.push(e);
    });
  }
}
