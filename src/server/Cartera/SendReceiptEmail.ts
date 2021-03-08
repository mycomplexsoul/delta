import { DateUtils } from '../../crosscommon/DateUtility';
import { CarteraProvision } from '../../crosscommon/entities/CarteraProvision';
import { CarteraUnit } from '../../crosscommon/entities/CarteraUnit';
import { getUnits, getProvisions } from './CarteraCommons';
import EmailModule from '../EmailModule';
import { configModule } from '../ConfigModule';
import { iNode } from '../iNode';
import * as fs from 'fs';

const CODE_NORMAL = "cuota-normal";
const CODE_PENALIZATION = "cuota-penalidad";
const CODE_EXTRA = "cuota-extra";
const CODE_EXTRA_PENALIZATION = "cuota-extra_penalidad";
const CODE_NONE = "none";

const mapCodeWithDescription = {
  [CODE_NORMAL]: "Mantenimiento",
  [CODE_PENALIZATION]: "Penalización de Mantenimiento",
  [CODE_EXTRA]: "Cuota Extraordinaria",
  [CODE_EXTRA_PENALIZATION]: "Penalización de Cuota Extraordinaria",
  [CODE_NONE]: "Otro concepto",
};

const sendReceiptEmail = async (year: number, month: number, unit: string = null) => {
    const response = { total: 0, skipped: 0, sent: 0, items: [] };
    const prefix = `${DateUtils.getMonthNameSpanish(month).substring(0, 3).toUpperCase()}${year - 2000}`;
    console.log('-- prefix', prefix);

    // get units and provisions that have folio
    const unitList: CarteraUnit[] = await getUnits();
    const provisionList: CarteraProvision[] = (await getProvisions()).filter(
      p => (unit ? p.cpr_id_unit == unit : true) && p.cpr_folio
    ).filter(p => p.cpr_folio.includes(prefix))
    .sort((a, b) => 
    // order by folio
      parseInt(a.cpr_folio.substr(a.cpr_folio.indexOf('-') + 1, 3), 10) > parseInt(b.cpr_folio.substr(b.cpr_folio.indexOf('-') + 1, 3), 10) ? 1 : -1
    );

    // prepare data for email
    const body = 'Buen día, hacemos llegar su recibo de pago de mantenimiento.';
    const fromOverride = configModule.getConfigValue('receipts-email-from');
    
    // iterate and send email
    return new Promise((resolve, reject) => {
      console.log(`-- processing ${provisionList.length} items`);
      response.total = provisionList.length;
      
      provisionList.forEach(p => {
        const monthName = DateUtils.getMonthNameSpanish(p.cpr_month);
        const subject = `FFJ78 Recibo de ${mapCodeWithDescription[p.cpr_type]} ${monthName} ${p.cpr_year}`;
        const filename = `${p.cpr_folio} Recibo de pago ${p.cpr_id_unit} - ${mapCodeWithDescription[p.cpr_type]} ${monthName} ${p.cpr_year}.pdf`;
        const filepath = `${configModule.getConfigValue('receipts-path')}${filename}`;
        const to = unitList.find(u => u.uni_id === p.cpr_id_unit).uni_email;

        // only send if file exists
        const file_exists = fs.existsSync(filepath);

        response.items.push({
          to,
          // original_to: unitList.find(u => u.uni_id === p.cpr_id_unit).uni_email,
          subject,
          path: filepath,
          file_exists
        });

        if (file_exists) {
          response.sent += 1;
          EmailModule.sendHTMLEmail({subject, html: body, to, attachments: [{
            filename,
            path: filepath
          }], fromOverride});
        } else {
          response.skipped += 1;
        }
      });

      resolve(response);
    });
};

async function postSendReceiptsEmailHandler(node: iNode) {
  const { year, month, unit } = node.request.body as any;

  const responseDetails = await sendReceiptEmail(year, month, unit);

  node.response.end(
    JSON.stringify({
      operationOk: true,
      responseDetails
    })
  );
}

export {
  sendReceiptEmail,
  postSendReceiptsEmailHandler
};
