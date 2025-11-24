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
    this.externalCreate(node.request.body).then((response) => {
      console.log("response from API", response);
      node.response.end(JSON.stringify(response));
    });
  };

  externalCreate = (body: any): Promise<any> => {
    const api: ApiModule = new ApiModule(new Link());

    if (!body.lnk_url) {
      return Promise.resolve({
        success: false,
        message: "Bad payload, you did not sent an url",
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
      lnk_ctg_status: 1,
    };

    return api.create({ body: item }, {});
  };

  importFromJSON = () => {
    const data: any = configModule.loadJSON("./links");
    const api: ApiModule = new ApiModule(new Link());

    data.children.forEach((folder) => {
      folder.children.forEach((bookmark) => {
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
    this.get(node.request.query).then((response) => {
      console.log("response from API", response);
      node.response.json(response);
    });
  };

  get = (query: any): Promise<any> => {
    const api: ApiModule = new ApiModule(new Link());

    if (!query.lnk_url) {
      return Promise.resolve({
        success: false,
        message: "Bad request, you did not sent an url",
      });
    }

    // TODO: Improve this later: it is parsing query, then concatenating user id and stringifying again :-(
    const q = {
      cont: [],
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
      {
        sql: `SELECT DATE( lnk_date_add ) as date, COUNT( * ) as counter
          FROM link
          WHERE DATE( lnk_date_add ) = CURDATE()
          GROUP BY DATE( lnk_date_add )
          ORDER BY DATE( lnk_date_add ) DESC`,
        model: new Link(),
        name: "added_counter",
      },
      {
        sql: `SELECT DATE( lnk_date_mod ) as date, COUNT( * ) as counter
          FROM link
          WHERE DATE( lnk_date_mod ) = CURDATE()
          AND DATE( lnk_date_add ) != DATE( lnk_date_mod )
          GROUP BY DATE( lnk_date_mod )
          ORDER BY DATE( lnk_date_mod ) DESC`,
        model: new Link(),
        name: "modified_counter",
      },
    ];

    return api.multipleListWithSQL({ queue });
  };

  externalUpdateRequestHandler = (node: iNode) => {
    this.externalUpdate(node.request.body, node.request.params).then(
      (response) => {
        console.log("response from API", response);
        node.response.end(JSON.stringify(response));
      }
    );
  };

  externalUpdate = (body: any, pk: any): Promise<any> => {
    const api: ApiModule = new ApiModule(new Link());

    if (!body.lnk_url) {
      return Promise.resolve({
        success: false,
        message: "Bad payload, you did not sent an url",
      });
    }

    console.log("pk received", pk);

    const item = {
      lnk_id: body.lnk_id || pk.lnk_id,
      lnk_url: body.lnk_url,
      lnk_title: body.lnk_title,
      lnk_tags: body.lnk_tags || null,
      lnk_comment: null,
      lnk_id_user: body.lnk_id_user,
      lnk_date_add:
        new Date(body.lnk_date_add) || DateUtils.newDateUpToSeconds(),
      lnk_date_mod: DateUtils.newDateUpToSeconds(),
      lnk_ctg_status: 1,
    };

    return api.update({ body: item, pk }, {});
  };

  async batchAddLinks(req, res) {
    try {
      const links = req.body.links || [];
      const api: ApiModule = new ApiModule(new Link());
      const results: Array<{ action: string; url: any; result: any }> = [];

      // Trae todos los links existentes
      const existingLinksResp: Link[] = (await api.list(
        {},
        new Link()
      )) as Link[];
      const existingLinks = Array.isArray(existingLinksResp)
        ? existingLinksResp
        : existingLinksResp || [];

      for (const link of links) {
        // Busca si el link ya existe por lnk_url
        const found = existingLinks.find((l) => l.lnk_url === link.lnk_url);

        if (found) {
          // Actualiza solo el status a 0
          const updatePayload = {
            ...found,
            lnk_ctg_status: 0,
          };
          // eslint-disable-next-line no-await-in-loop
          const result = await api.update(
            { body: updatePayload, pk: { lnk_id: found.lnk_id } },
            {}
          );
          results.push({ action: "update", url: link.lnk_url, result });
        } else {
          // Genera un id si no existe
          if (!link.lnk_id) {
            link.lnk_id = Utils.hashIdForEntity(new Link(), "lnk_id");
          }
          // Asigna fechas si no existen
          link.lnk_date_add = link.lnk_date_add
            ? new Date(link.lnk_date_add)
            : DateUtils.newDateUpToSeconds();
          link.lnk_date_mod = DateUtils.newDateUpToSeconds();
          // Asigna status si no existe
          if (typeof link.lnk_ctg_status === "undefined") {
            link.lnk_ctg_status = 0;
          }
          // Crea el registro
          // eslint-disable-next-line no-await-in-loop
          const result = await api.create({ body: link }, {});
          results.push({ action: "create", url: link.lnk_url, result });
        }
      }

      res
        .status(200)
        .json({ success: true, message: "Links saved correctly", results });
    } catch (e) {
      res.status(500).json({ success: false, message: "Failed to save links" });
    }
  }
}
