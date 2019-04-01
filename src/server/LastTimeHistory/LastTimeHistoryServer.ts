import { ApiModule } from "../ApiModule";
import { iNode } from "../iNode";
import { LastTimeHistory } from "../../crosscommon/entities/LastTimeHistory";

export class LastTimeHistoryServer {
  list = (node: iNode) => {
    let api: ApiModule = new ApiModule(new LastTimeHistory());

    api.list({ q: node.request.query["q"] }).then(response => {
      node.response.end(JSON.stringify(response));
    });
  };
}
