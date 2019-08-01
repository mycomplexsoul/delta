import { Link } from "../../crosscommon/entities/Link";
import { ApiServer } from "../ApiServer";
import { iNode } from "../iNode";
import { ApiModule } from "../ApiModule";
import { DateUtils } from "../../crosscommon/DateUtility";
import { Utils } from "../../crosscommon/Utility";

export class LinkServer {
  private api: ApiServer = new ApiServer(new Link());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = this.api.createRequestHandler;
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;

  externalCreateRequestHandler = (node: iNode) => {
    this.externalCreate(node.request.body).then(response => {
      node.response.end(JSON.stringify(response));
    });
  };

  externalCreate = (body: any): Promise<any> => {
    const api: ApiModule = new ApiModule(new Link());

    const item = {
      lnk_id: Utils.hashIdForEntity(new Link(), "lnk_id"),
      lnk_url: body.lnk_url,
      lnk_title: body.lnk_title,
      lnk_tags: body.lnk_tags || null,
      lnk_comment: null,
      lnk_id_user: body.lnk_id_user,
      lnk_date_add: DateUtils.newDateUpToSeconds(),
      lnk_date_mod: DateUtils.newDateUpToSeconds(),
      lnk_ctg_status: 1
    };

    return api.create({ body: item }, {});
  };
}
