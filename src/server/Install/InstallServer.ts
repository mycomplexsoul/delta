import { iNode } from "../iNode";
import { InstallModule } from "../InstallModule";

export class InstallServer {
  install = (node: iNode) => {
    let gen: InstallModule = new InstallModule();

    gen.install();

    node.response.end(
      JSON.stringify({
        operationOK: true,
        message: `Successfully installed!`
      })
    );
  };
}
