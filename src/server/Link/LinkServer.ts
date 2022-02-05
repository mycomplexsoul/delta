import { Link } from "../../crosscommon/entities/Link";
import { ApiServer } from "../ApiServer";
import { iNode } from "../iNode";
import { ApiModule } from "../ApiModule";
import { DateUtils } from "../../crosscommon/DateUtility";
import { Utils } from "../../crosscommon/Utility";
import { configModule } from "../ConfigModule";
import { iEntity } from "../../crosscommon/iEntity";
import { MoSQL } from "../MoSQL";

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
      console.log('response from API', response);
      node.response.end(JSON.stringify(response));
    });
  };

  externalCreate = (body: any): Promise<any> => {
    const api: ApiModule = new ApiModule(new Link());

    if (!body.lnk_url) {
      return Promise.resolve({
        success: false,
        message: 'Bad payload, you did not sent an url'
      });
    }

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

  importFromJSON = () => {
    const data: any = configModule.loadJSON("./links");
    const api: ApiModule = new ApiModule(new Link());

    data.children.forEach(folder => {
      folder.children.forEach(bookmark => {
        if (bookmark.type === "text/x-moz-place") {
          const link: Link = new Link();

          link.lnk_id = Utils.hashIdForEntity(new Link(), "lnk_id");
          link.lnk_url = bookmark.uri;
          link.lnk_title = bookmark.title;
          // link.lnk_icon_url = bookmark.iconuri
          link.lnk_tags = `imported ${folder.title.replace(
            new RegExp(/\s/g),
            ""
          )}`;
          link.lnk_comment = null;
          // link.lnk_id_user = body.lnk_id_user
          link.lnk_date_add = DateUtils.newDateUpToSeconds();
          link.lnk_date_mod = DateUtils.newDateUpToSeconds();
          link.lnk_ctg_status = 1;

          api.create({ body: link }, {});
        } else {
          // it's not a link, skip it
        }
      });
    });
  };

  getRequestHandler = (node: iNode) => {
    this.get(node.request.query).then(response => {
      console.log('response from API', response);
      node.response.json(response);
    });
  };

  get = (query: any): Promise<any> => {
    const api: ApiModule = new ApiModule(new Link());

    if (!query.lnk_url) {
      return Promise.resolve({
        success: false,
        message: 'Bad request, you did not sent an url'
      });
    }

    // TODO: Improve this later: it is parsing query, then concatenating user id and stringifying again :-(
    const q = {
      cont: []
    };
    q.cont.push({
      f: "lnk_url",
      op: "eq",
      val: query["lnk_url"],
    });

    const queue = [
      {
        sql: "select * from vilink",
        model: new Link(),
        name: "links",
        q: JSON.stringify(q),
      },
    ];

    return api.listWithSQL(queue[0]);
  }

  externalUpdateRequestHandler = (node: iNode) => {
    this.externalUpdate(node.request.body, node.request.params).then(response => {
      console.log('response from API', response);
      node.response.end(JSON.stringify(response));
    });
  };

  externalUpdate = (body: any, pk: any): Promise<any> => {
    const api: ApiModule = new ApiModule(new Link());

    if (!body.lnk_url) {
      return Promise.resolve({
        success: false,
        message: 'Bad payload, you did not sent an url'
      });
    }

    console.log('pk received', pk);

    const item = {
      lnk_id: body.lnk_id || pk.lnk_id,
      lnk_url: body.lnk_url,
      lnk_title: body.lnk_title,
      lnk_tags: body.lnk_tags || null,
      lnk_comment: null,
      lnk_id_user: body.lnk_id_user,
      lnk_date_add: new Date(body.lnk_date_add) || DateUtils.newDateUpToSeconds(),
      lnk_date_mod: DateUtils.newDateUpToSeconds(),
      lnk_ctg_status: 1
    };

    return api.update({ body: item, pk }, {});
  };
}
