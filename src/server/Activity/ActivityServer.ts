import { Activity } from "../../crosscommon/entities/Activity";
import { ApiServer } from "../ApiServer";

import { iNode } from "../iNode";
import { DateUtils } from "../../crosscommon/DateUtility";
import { KeyvalServer } from "../Keyval/KeyvalServer";

export class ActivityServer {
  private api: ApiServer = new ApiServer(new Activity());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  createRequestHandler = (node: iNode) => {
    const hooks = {
      afterInsertOK: async (responseCreate, model: Activity) => {
        // insert Keyval data
        const { keyvalItems = {} } = node.request.body;
        const keyvalServer = new KeyvalServer();

        await Object.keys(keyvalItems)
          .map(keyname => ({
            key_id: model.act_id,
            key_name: keyname,
            key_value: keyvalItems[keyname],
            key_date_add: DateUtils.newDateUpToSeconds(),
            key_date_mod: DateUtils.newDateUpToSeconds(),
            key_ctg_status: 1
          }))
          .map(item => keyvalServer.create(item));

        return {
          operationOk: true,
          message: `${
            Object.keys(keyvalItems).length
          } Keyval records created successfully`
        };
      }
    };
    this.api.createRequestHandler(node, hooks);
  };
  create = this.api.create;

  updateRequestHandler = this.api.updateRequestHandler;
  update = this.api.update;
}
