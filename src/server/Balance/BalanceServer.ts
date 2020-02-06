import { ApiModule } from "../ApiModule";
import { iNode } from "../iNode";
import { Balance } from "../../crosscommon/entities/Balance";
import { BalanceModule } from "../BalanceModule";
import { ApiServer } from "../ApiServer";

export class BalanceServer {
  private api: ApiServer = new ApiServer(new Balance());

  listRequestHandler = this.api.listRequestHandler;
  list = this.api.list;

  rebuild = async (req: any, res: any) => {
    const balanceModule: BalanceModule = new BalanceModule();
    const { year, month, user } = req.body; // TODO: validate params types and values
    let message: string = "Something went wrong, please try again later";

    const result = await balanceModule.rebuild(year, month, user);
    if (result) {
      message = "Rebuild process finished correctly.";
    }
    res.end(JSON.stringify({ operationResult: result, message }));
  };

  transfer = async (req: any, res: any) => {
    const balanceModule: BalanceModule = new BalanceModule();
    const { year, month, user } = req.body; // TODO: validate params types and values
    let message: string = "Something went wrong, please try again later";

    const result = await balanceModule.transfer(year, month, user);
    if (result) {
      message = "Rebuild process finished correctly.";
    }
    res.end(JSON.stringify({ operationResult: result, message }));
  };

  rebuildAndTransfer = async (req: any, res: any) => {
    const balanceModule: BalanceModule = new BalanceModule();
    const { year, month, user } = req.body; // TODO: validate params types and values
    const message: string = "Rebuild process finished correctly.";

    balanceModule.rebuildAndTransfer(year, month, user);
    res.end(JSON.stringify({ operationResult: true, message }));
  };

  rebuildAndTransferRange = async (req: any, res: any) => {
    const balanceModule: BalanceModule = new BalanceModule();
    const { year, month, user } = req.body; // TODO: validate params types and values
    const message: string = "Rebuild process finished correctly.";
    const currentDate: Date = new Date();

    balanceModule.rebuildAndTransferRange(
      Number.parseInt(year),
      Number.parseInt(month),
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      user
    );
    res.end(JSON.stringify({ operationResult: true, message }));
  };
}
