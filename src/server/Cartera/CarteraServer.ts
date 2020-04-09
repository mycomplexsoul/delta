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
  PenaExtra: CODE_EXTRA_PENALIZATION
};

const mapConceptWithDescription = {
  Cuota: "Cuota de Mantenimiento",
  Penalización: "Penalización",
  Extra: "Cuota Extraordinaria",
  PenaExtra: "Penalidad de Cuota Extraordinaria",
  None: "Depósito sin identificar"
};

const mapCodeWithDescription = {
  [CODE_NORMAL]: mapConceptWithDescription["Cuota"],
  [CODE_PENALIZATION]: mapConceptWithDescription["Penalización"],
  [CODE_EXTRA]: mapConceptWithDescription["Extra"],
  [CODE_EXTRA_PENALIZATION]: mapConceptWithDescription["PenaExtra"],
  [CODE_NONE]: mapConceptWithDescription["None"]
};

export class CarteraServer {
  generateAllProvisionsForMonthHandler(node: iNode) {
    const { year, month, user } = node.request.body;

    this.generateAllProvisionsForMonth(year, month, user).then(
      provisionList => {
        node.response.end(
          JSON.stringify({
            operationOk: true,
            provisionList: provisionList.map(provision =>
              Utils.entityToRawTableFields(provision)
            )
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
      504
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

    units.forEach(unit => {
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
      cpr_remaining: AMOUNT,
      cpr_id_user: user,
      cpr_date_add: new Date(),
      cpr_date_mod: new Date(),
      cpr_ctg_status: 1
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
      .then(response => {
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
      .catch(err => {
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

    this.savePayments(paymentList).then(async payList => {
      // Payments are saved, now peek into payments date to generate penalization provisions
      paymentList.forEach(p => {
        this.generatePenalizationProvisionForLatePayment(p);
      });

      // Now match those payments to provisions
      const paymentsApplied = await this.matchPaymentsWithProvisions(
        paymentList
      );

      node.response.end(
        JSON.stringify({
          operationOk: true,
          provisionList: payList.map(payment =>
            Utils.entityToRawTableFields(payment)
          ),
          paymentsApplied
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
    data.forEach(row => {
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
          cpy_ctg_status: 1
        })
      );
    });

    return list;
  }

  savePayments(paymentList: CarteraPayment[]): Promise<CarteraPayment[]> {
    const allPayments: Promise<CarteraPayment>[] = [];

    paymentList.forEach(payment => {
      allPayments.push(this.savePayment(payment));
    });

    return Promise.all(allPayments);
  }

  savePayment(payment: CarteraPayment): Promise<CarteraPayment> {
    const apiCarteraPayment: ApiModule = new ApiModule(new CarteraPayment());

    return apiCarteraPayment
      .create({ body: Utils.entityToRawTableFields(payment) }, {})
      .then(response => {
        if (response.operationOk) {
          return payment;
        }
        console.log("error generating Payment", payment.recordName, response);
        return null;
      })
      .catch(err => {
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
      .then(items => items.map(i => new CarteraProvision(i)));

    // iterate over payments
    paymentList.forEach(async payment => {
      // for this payment, find the proper provision and register the match
      const provision = provisionList.find(
        item =>
          payment.cpy_match_hint ===
          `${item.cpr_code_reference}|${item.cpr_id_unit}`
      );

      if (provision) {
        // found a provision
        if (provision.cpr_remaining === 0) {
          // TODO: provision is payed, should apply to subsequent provisions
          console.log(
            `payment with id ${
              payment.cpy_id
            } was tried to apply at provision with id ${
              provision.cpr_id
            } but it's already payed, a remaining of ${
              payment.cpy_amount
            } was not applied to a provision`
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
            cpd_ctg_status: 1
          });

          payDetList.push(paydet);

          const remaining: boolean =
            provision.cpr_remaining < payment.cpy_amount;
          provision.cpr_payed += amount;
          provision.cpr_remaining -= amount;

          const apiCarteraPayDet: ApiModule = new ApiModule(paydet);
          await this.savePayDet(apiCarteraPayDet, paydet).then(
            async response => {
              return await this.updateProvision(
                apiCarteraProvision,
                provision,
                provision
              ).then(async updateResponse => {
                paymentsApplied.push({
                  payment: Utils.entityToRawTableFields(payment),
                  provisionList: [
                    {
                      provision: Utils.entityToRawTableFields(provision),
                      paydet: Utils.entityToRawTableFields(paydet)
                    }
                  ]
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
                    `payment with id ${
                      payment.cpy_id
                    } has a remaining of ${amountLeft} that was not applied to a provision`
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

    provisionList.forEach(provision => {
      allProvisions.push(
        this.saveProvision(apiCarteraProvision, provision, provision)
      );
    });

    return Promise.all(allProvisions).then(list => {
      console.log("listing", provisionList);
      node.response.end(
        JSON.stringify({
          operationOk: true,
          provisionList: list.map(provision =>
            Utils.entityToRawTableFields(provision)
          )
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
     * 204|PenaExtra|2018-12|125|0|68|16/07/2019|57
     * 301|Cuota|2019-03|1480|0|1132|20/03/2019|348
     * 302|Penalización|2018-04|148|0|141|23/09/2019|7
     */
    const list: CarteraProvision[] = [];

    data.forEach(row => {
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
          cpr_payed: 0,
          cpr_remaining: parseFloat(columns[7]),
          cpr_id_user: user,
          cpr_date_add: DateUtils.newDateUpToSeconds(),
          cpr_date_mod: DateUtils.newDateUpToSeconds(),
          cpr_ctg_status: 1
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
      .then(response => {
        if (response.operationOk) {
          return payDet;
        }
        console.log("error generating payDet", payDet.recordName, response);
        return null;
      })
      .catch(err => {
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
          pk: Utils.getPKFromEntity(provision)
        },
        {},
        model
      )
      .then(response => {
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
      .catch(err => {
        console.log("error generating Provision", provision.recordName, err);
        return null;
      });
  }

  generatePenalizationForMissingPaymentHandler(node: iNode) {
    const { year, month, user } = node.request.body;

    this.generatePenalizationForMissingPayment(year, month, user).then(list => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
          provisionList: list.map(provision =>
            Utils.entityToRawTableFields(provision)
          )
        })
      );
    });
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
          val: 0
        },
        {
          f: "cpr_date",
          op: "eq",
          val: new Date(year, month - 1, 1, 0, 0, 0)
        }
      ]
    };
    const provisionList = await apiCarteraProvision
      .list({ q: JSON.stringify(filter) })
      .then(items => items.map(item => new CarteraProvision(item)));

    const penalizationList: CarteraProvision[] = [];
    provisionList.forEach(provision => {
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
          cpr_payed: 0,
          cpr_remaining: 148,
          cpr_id_user: user,
          cpr_date_add: DateUtils.newDateUpToSeconds(),
          cpr_date_mod: DateUtils.newDateUpToSeconds(),
          cpr_ctg_status: 1
        })
      );
    });

    const allProvisions: Promise<CarteraProvision>[] = [];

    penalizationList.forEach(provision => {
      allProvisions.push(
        this.saveProvision(apiCarteraProvision, provision, provision)
      );
    });

    return Promise.all(allProvisions).then(list => {
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
      nextProvision = provisionList.find(prov => {
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
        .map(value => parseInt(value));
      const nextYearMonth = DateUtils.getIterableNextMonth(year, month);

      nextProvision = provisionList.find(prov => {
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
      nextProvision = provisionList.find(prov => {
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
          `Will try to pay provisions with remaining amount ${remainingAmount} from payment id ${
            payment.cpy_id
          }`
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
            cpd_ctg_status: 1
          });

          nextProvision.cpr_payed += amount;
          nextProvision.cpr_remaining -= amount;

          const apiCarteraPayDet: ApiModule = new ApiModule(paydet);
          const apiCarteraProvision: ApiModule = new ApiModule(nextProvision);
          await this.savePayDet(apiCarteraPayDet, paydet).then(
            async response => {
              return await this.updateProvision(
                apiCarteraProvision,
                nextProvision,
                nextProvision
              ).then(updateResponse => {
                remainingAmount -= amount;

                paymentsApplied
                  .find(detail => detail.payment.cpy_id === payment.cpy_id)
                  .provisionList.push({
                    provision: Utils.entityToRawTableFields(provision),
                    paydet: Utils.entityToRawTableFields(paydet)
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

    const provisionList: CarteraProvision[] = await this.getProvisions();
    const paymentList: CarteraPayment[] = await this.getPayments();

    payments.forEach(async detail => {
      const selectedPayment = paymentList.find(
        p => p.cpy_id === detail.payment_id
      );
      const selectedProvision = provisionList.find(
        p => p.cpr_id === detail.provision_id
      );

      const paydet: CarteraPayDet = new CarteraPayDet({
        cpd_id: Utils.hashIdForEntity(new CarteraPayDet(), "cpd_id"),
        cpd_id_provision: selectedProvision.cpr_id,
        cpd_id_payment: selectedPayment.cpy_id,
        cpd_amount: detail.amount,
        cpd_id_user: selectedPayment.cpy_id_user,
        cpd_date_add: DateUtils.newDateUpToSeconds(),
        cpd_date_mod: DateUtils.newDateUpToSeconds(),
        cpd_ctg_status: 1
      });

      selectedProvision.cpr_payed += detail.amount;
      selectedProvision.cpr_remaining -= detail.amount;

      const apiCarteraPayDet: ApiModule = new ApiModule(paydet);
      const apiCarteraProvision: ApiModule = new ApiModule(selectedProvision);
      await this.savePayDet(apiCarteraPayDet, paydet).then(async response => {
        return await this.updateProvision(
          apiCarteraProvision,
          selectedProvision,
          selectedProvision
        ).then(updateResponse => {
          return true;
        });
      });
    });

    node.response.end(
      JSON.stringify({
        operationOk: true
      })
    );
  }

  async getProvisions(): Promise<CarteraProvision[]> {
    const apiCarteraProvision: ApiModule = new ApiModule(
      new CarteraProvision()
    );
    return apiCarteraProvision
      .list({})
      .then(items => items.map(i => new CarteraProvision(i)));
  }

  async getPayments(): Promise<CarteraPayment[]> {
    const apiCarteraPayment: ApiModule = new ApiModule(new CarteraPayment());
    return apiCarteraPayment
      .list({})
      .then(items => items.map(i => new CarteraPayment(i)));
  }

  async getPayDetList(): Promise<CarteraPayDet[]> {
    const apiCarteraPayDet: ApiModule = new ApiModule(new CarteraPayDet());
    return apiCarteraPayDet
      .list({})
      .then(items => items.map(i => new CarteraPayDet(i)));
  }

  async getPaymentApplicationListing(year: number, month: number) {
    const provisionList: CarteraProvision[] = await this.getProvisions();
    const paymentList: CarteraPayment[] = await this.getPayments();
    const payDetList: CarteraPayDet[] = await this.getPayDetList();

    const initialDate: Date = new Date(year, month - 1, 1);
    const finalDate: Date = new Date(year, month, 1);

    const listing = {
      paymentList: paymentList
        .filter(
          item =>
            initialDate.getTime() < item.cpy_date.getTime() &&
            item.cpy_date.getTime() < finalDate.getTime()
        )
        .map(payment => {
          return {
            payment: Utils.entityToRawTableFields(payment),
            provisionList: payDetList
              .filter(pd => pd.cpd_id_payment === payment.cpy_id)
              .map(pd => {
                return {
                  paydet: Utils.entityToRawTableFields(pd),
                  provision: Utils.entityToRawTableFields(
                    provisionList.find(p => p.cpr_id === pd.cpd_id_provision)
                  )
                };
              })
          };
        })
    };

    listing.paymentList.sort((a, b) =>
      a.payment.cpy_date.getTime() > b.payment.cpy_date.getTime() ? 1 : -1
    );

    return listing;
  }

  async getPaymentApplicationListingHandler(node: iNode) {
    const { year, month } = node.request.query;

    node.response.end(
      JSON.stringify({
        operationOk: true,
        listing: await this.getPaymentApplicationListing(year, month)
      })
    );
  }

  generatePenalizationForUnitHandler(node: iNode) {
    const { year, month, unit, user } = node.request.body;

    this.generatePenalizationForUnit(year, month, unit, user).then(list => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
          provisionList: list.map(provision =>
            Utils.entityToRawTableFields(provision)
          )
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
          val: unit
        }
      ]
    };
    const provisionList = await apiCarteraProvision
      .list({ q: JSON.stringify(filter) })
      .then(items => items.map(item => new CarteraProvision(item)));

    const penalizationList: CarteraProvision[] = [];
    const provision = provisionList.find(
      p =>
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
        cpr_payed: 0,
        cpr_remaining: 148,
        cpr_id_user: user,
        cpr_date_add: DateUtils.newDateUpToSeconds(),
        cpr_date_mod: DateUtils.newDateUpToSeconds(),
        cpr_ctg_status: 1
      })
    );

    const allProvisions: Promise<CarteraProvision>[] = [];

    penalizationList.forEach(item => {
      allProvisions.push(this.saveProvision(apiCarteraProvision, item, item));
    });

    return Promise.all(allProvisions).then(list => {
      return list;
    });
  }

  rebuildPendingPaymentsForMonthHandler(node: iNode) {
    const { year, month, unit } = node.request.query;

    this.rebuildPendingPaymentsForMonth(
      parseInt(year, 10),
      parseInt(month, 10),
      unit
    ).then(list => {
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
          )
        })
      );
    });
  }

  async rebuildPendingPaymentsForMonth(
    year: number,
    month: number,
    unit: string = null
  ): Promise<{
    pendingProvisionList: CarteraProvision[];
    futureProvisionList: CarteraProvision[];
    nonIdentifiedPaymentList: CarteraPayment[];
  }> {
    let provisionList: CarteraProvision[] = [];

    const limitDate: Date = new Date(year, month, 1); // next month
    const allProvisions: CarteraProvision[] = (await this.getProvisions()).filter(
      prov => (unit ? prov.cpr_id_unit === unit : true)
    );

    const allPayDet: CarteraPayDet[] = (await this.getPayDetList()).filter(
      paydet =>
        unit
          ? paydet.cpd_id_unit === unit &&
            paydet.cpd_date_payment.getTime() < limitDate.getTime()
          : paydet.cpd_date_payment.getTime() < limitDate.getTime()
    );

    provisionList = allProvisions.map(p => {
      p.cpr_payed = 0;
      p.cpr_remaining = p.cpr_amount;
      return p;
    });

    allPayDet.forEach(paydet => {
      const prov = provisionList.find(
        p => p.cpr_id === paydet.cpd_id_provision
      );

      if (prov) {
        prov.cpr_payed += paydet.cpd_amount;
        prov.cpr_remaining -= paydet.cpd_amount;
      } else {
        // should not happen, report error
        console.error(
          `Provision with id ${
            paydet.cpd_id_provision
          } not found for paydet with id ${paydet.cpd_id}`
        );
      }
    });

    const pendingProvisionList = provisionList
      .filter(
        p =>
          (Math.round(p.cpr_remaining * 100) / 100 !== 0 || // provisions with remaining amount to be payed
            (p.cpr_remaining === 0 && // provisions fully payed in this month
              parseInt(
                p.cpr_code_reference.split("|")[1].replace("-", ""),
                10
              ) !==
                year * 100 + month &&
              allPayDet.filter(
                det =>
                  det.cpd_id_provision === p.cpr_id &&
                  det.cpd_date_payment.getFullYear() * 100 +
                    det.cpd_date_payment.getMonth() +
                    1 ===
                    year * 100 + month
              ).length > 0)) &&
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
        p => p.cpr_payed !== 0 && p.cpr_date.getTime() >= limitDate.getTime() // provisions with payments // provisions from next month and future months
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
      nonIdentifiedPaymentList
    });
  }

  async getNonIdentifiedPaymentsForMonth(
    year: number,
    month: number
  ): Promise<CarteraPayment[]> {
    const limitDate: Date = new Date(year, month, 1); // next month
    const paymentList: CarteraPayment[] = (await this.getPayments()).filter(
      payment =>
        payment.cpy_match_hint.includes("|000") &&
        payment.cpy_date.getTime() < limitDate.getTime()
    );

    return Promise.resolve(paymentList);
  }

  unitStatusForMonthHandler(node: iNode) {
    const { year, month, unit } = node.request.query;

    this.unitStatusForMonth(year, month, unit).then(list => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
          provisionList: list.provisionList.map(item => ({
            provision: Utils.entityToRawTableFields(item.provision),
            payDetList: item.payDetList.map(Utils.entityToRawTableFields)
          })),
          paymentList: list.paymentList.map(Utils.entityToRawTableFields)
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
      paymentList: []
    };

    const limitDate: Date = new Date(year, month, 1); // next month
    const allProvisions: CarteraProvision[] = (await this.getProvisions())
      .filter(
        prov =>
          prov.cpr_id_unit === unit &&
          (prov.cpr_date.getTime() >= limitDate.getTime()
            ? prov.cpr_payed > 0
            : true)
      )
      .sort((a, b) => (a.cpr_date.getTime() > b.cpr_date.getTime() ? 1 : -1));

    const allPayments: CarteraPayment[] = (await this.getPayments())
      .filter(i => i.cpy_match_hint.endsWith(`|${unit}`))
      .sort((a, b) => (a.cpy_date.getTime() > b.cpy_date.getTime() ? 1 : -1));

    const allPayDet: CarteraPayDet[] = (await this.getPayDetList()).filter(
      paydet => paydet.cpd_id_unit === unit
    );

    console.log(
      `provisions: ${allProvisions.length}, payments: ${
        allPayments.length
      }, paydet: ${allPayDet.length}`
    );

    result.provisionList = allProvisions.map(p => ({
      provision: p,
      payDetList: allPayDet
        .filter(
          det =>
            det.cpd_id_unit === p.cpr_id_unit &&
            det.cpd_id_provision === p.cpr_id
        )
        .sort((a, b) => (a.cpd_date.getTime() > b.cpd_date.getTime() ? 1 : -1))
    }));

    // validate detpay sumed up pays up assigned provision
    // validate payment has all detpay sums correctly

    result.paymentList = allPayments;

    return Promise.resolve(result);
  }
  /**
   * @deprecated This was used once, should delete
   */
  changeConceptToSpanishHandler(node: iNode) {
    this.changeConceptToSpanish().then(() => {
      node.response.end(
        JSON.stringify({
          operationOk: true
        })
      );
    });
  }
  /**
   * @deprecated This was used once, should delete
   */
  async changeConceptToSpanish(): Promise<boolean> {
    const allProvisions: CarteraProvision[] = await this.getProvisions();
    const allPayments: CarteraPayment[] = await this.getPayments();

    const connection: iConnection = ConnectionService.getConnection();
    const ApiProvision: ApiModule = new ApiModule(new CarteraProvision());
    allProvisions.forEach(async prov => {
      const [code, yearMonth] = prov.cpr_code_reference.split("|");
      const [year, month] = yearMonth.split("-").map(i => parseInt(i, 10));
      prov.cpr_concept = this.buildConcept(
        mapCodeWithDescription[code],
        year,
        month
      );
      await ApiProvision.update(
        {
          body: Utils.entityToRawTableFields(prov),
          pk: Utils.getPKFromEntity(prov)
        },
        {},
        prov,
        connection
      );
    });

    const ApiPayments: ApiModule = new ApiModule(new CarteraPayment());
    allPayments.forEach(async payment => {
      const [code, yearMonth] = payment.cpy_match_hint.split("|");
      const [year, month] = yearMonth.split("-").map(i => parseInt(i, 10));
      payment.cpy_description = this.buildConcept(
        mapCodeWithDescription[code],
        year,
        month
      );
      await ApiPayments.update(
        {
          body: Utils.entityToRawTableFields(payment),
          pk: Utils.getPKFromEntity(payment)
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

    this.registerMonthlyIncome(year, month, user).then(response => {
      node.response.end(
        JSON.stringify({
          operationOk: true,
          movementList: response.map(Utils.entityToRawTableFields)
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
    }> = await apiModule
      .listWithSQL({
        // Get payDet info which is already assigned by type
        // Also gets non-identified payments
        sql: `SELECT cpd_id_unit as unit,
        cpd_code_reference as concept,
        cpd_date_payment as date,
        cpd_amount as amount
      FROM vicarterapaydet
      WHERE
      cpd_date_payment >= '${DateUtils.formatDate(initialDate, "yyyy-MM-dd")}'
      and cpd_date_payment < '${DateUtils.formatDate(finalDate, "yyyy-MM-dd")}'
      
      UNION ALL
      
      SELECT '${CODE_NONE}' as unit,
      cpy_match_hint as concept,
      cpy_date as date,
      cpy_amount as amount
      FROM carterapayment
      WHERE
      cpy_date >= '${DateUtils.formatDate(initialDate, "yyyy-MM-dd")}'
      and cpy_date < '${DateUtils.formatDate(finalDate, "yyyy-MM-dd")}'
      and SUBSTR(cpy_match_hint, -3) = '000'
      order by date, unit`
      })
      .then(response =>
        response.map(e => ({
          unit: e["unit"],
          concept: e["concept"],
          date: new Date(e["date"]),
          amount: e["amount"]
        }))
      );

    const params = {
      account_id: "acc2020040520302", // Fondo
      category_id: "mct20200405203206-356263334002", // Recaudación
      place_id: "mpl20200405203255-686190649216" // Condominio
    };

    // create an income movement for each sum item
    const movementList: Movement[] = sumPaymentList.map(
      ({ unit, concept, date, amount }) =>
        new Movement({
          mov_id: Utils.hashIdForEntity(new Movement(), "mov_id"),
          mov_date: date,
          mov_ctg_currency: 1,
          mov_amount: amount,
          mov_id_account: params.account_id,
          mov_id_account_to: null,
          mov_ctg_type: 2, // income
          mov_budget: null,
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
                )} ${year} ${unit === CODE_NONE ? "000" : unit}`,
          mov_notes: `${concept}|${unit === CODE_NONE ? "000" : unit}`,
          mov_id_user: user,
          mov_date_add: DateUtils.newDateUpToSeconds(),
          mov_date_mod: DateUtils.newDateUpToSeconds(),
          mov_ctg_status: 1
        })
    );

    // Register movements
    const movementServer: MovementCustom = new MovementCustom();

    for await (const mov of movementList) {
      movementServer
        .create({ body: mov })
        .catch(err =>
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
      .map(n => parseInt(n, 10));
    return {
      year: result[0],
      month: result[1]
    };
  }
}
