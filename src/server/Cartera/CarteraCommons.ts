import { CarteraPayDet } from '../../crosscommon/entities/CarteraPayDet';
import { CarteraPayment } from '../../crosscommon/entities/CarteraPayment';
import { CarteraProvision } from '../../crosscommon/entities/CarteraProvision';
import { CarteraUnit } from '../../crosscommon/entities/CarteraUnit';
import { ApiModule } from '../ApiModule';

async function getProvisions(): Promise<CarteraProvision[]> {
  const apiCarteraProvision: ApiModule = new ApiModule(
    new CarteraProvision()
  );
  return apiCarteraProvision
    .list({})
    .then((items) => items.map((i) => new CarteraProvision(i)));
};

  async function getUnits(): Promise<CarteraUnit[]> {
    const apiCarteraUnit: ApiModule = new ApiModule(new CarteraUnit());
    return apiCarteraUnit
      .list({})
      .then((items) => items.map((i) => new CarteraUnit(i)));
  }

  async function getPayments(): Promise<CarteraPayment[]> {
    const apiCarteraPayment: ApiModule = new ApiModule(new CarteraPayment());
    return apiCarteraPayment
      .list({})
      .then((items) => items.map((i) => new CarteraPayment(i)));
  }

  async function getPayDetList(): Promise<CarteraPayDet[]> {
    const apiCarteraPayDet: ApiModule = new ApiModule(new CarteraPayDet());
    return apiCarteraPayDet
      .list({})
      .then((items) => items.map((i) => new CarteraPayDet(i)));
  }

export {
    getProvisions,
    getUnits,
    getPayments,
    getPayDetList
};
