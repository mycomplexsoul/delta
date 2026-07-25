import { CarteraPayDet } from '../../crosscommon/entities/CarteraPayDet';
import { CarteraPayment } from '../../crosscommon/entities/CarteraPayment';
import { CarteraProvision } from '../../crosscommon/entities/CarteraProvision';
import { CarteraUnit } from '../../crosscommon/entities/CarteraUnit';
declare function getProvisions(): Promise<CarteraProvision[]>;
declare function getUnits(): Promise<CarteraUnit[]>;
declare function getPayments(): Promise<CarteraPayment[]>;
declare function getPayDetList(): Promise<CarteraPayDet[]>;
export { getProvisions, getUnits, getPayments, getPayDetList };
//# sourceMappingURL=CarteraCommons.d.ts.map