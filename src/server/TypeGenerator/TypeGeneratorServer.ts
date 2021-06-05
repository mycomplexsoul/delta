import { iNode } from "../iNode";
import * as Generator from "../MoBasicGenerator";
import ConnectionService from "../ConnectionService";

export class TypeGeneratorServer {
  entities: string[] = [
    "Catalog",
    "User",
    "Logger",
    // Tasks
    "Task",
    "TaskTimeTracking",
    "TaskSchedule",
    // Money
    "Account",
    "Category",
    "Place",
    "Movement",
    "Entry",
    "Balance",
    "Preset",
    // LastTime
    "LastTime",
    "LastTimeHistory",
    // Multimedia
    "Multimedia",
    "MultimediaDet",
    "MultimediaView",
    // Links
    "Link",
    // Activities
    "Activity",
    "Keyval",
    // Cartera
    "CarteraProvision",
    "CarteraPayment",
    "CarteraPayDet",
    "CarteraUnit",
    // Timeline
    "Timeline"
  ];

  config = (node: iNode) => {
    const response = {
      entities: this.entities
    };
    node.response.end(JSON.stringify(response));
  };

  create = (node: iNode) => {
    let gen: Generator.MoBasicGenerator;
    const entities = node.request.body.entities || this.entities;

    const message: string = entities.join(", ");

    entities.forEach((entity: string) => {
      gen = new Generator.MoBasicGenerator(entity);
      gen.createTypeFile();
    });
    node.response.end(
      JSON.stringify({
        success: true,
        message: `Successfully generated File types for the entities: ${message}`
      })
    );
  };

  check = (node: iNode) => {
    let gen: Generator.MoBasicGenerator;
    const entities = node.request.body.entities || this.entities;

    const entitiesStr: string = entities.join(", ");
    let message = `Checked the following entities: ${entitiesStr}`;

    entities.forEach((entity: string) => {
      gen = new Generator.MoBasicGenerator(entity);
      const msg = gen.checkEntityDefinition();
      if (msg) {
        message += "<br/>" + msg;
      }
    });
    node.response.end(JSON.stringify({ success: true, message }));
  };

  checkDatabase = async (node: iNode) => {
    let gen: Generator.MoBasicGenerator;
    const entities = node.request.body.entities || this.entities;

    const entitiesStr: string = entities.join(", ");
    let message = `Checked the following entities: ${entitiesStr}`;

    const connection = ConnectionService.getConnection();

    for await (let entity of entities) {
      gen = new Generator.MoBasicGenerator(entity);
      const msg = await gen.checkEntityDefinitionAgainstDatabase(connection);
      if (msg) {
        message += "<br/>" + msg;
      }
    }

    node.response.end(JSON.stringify({ success: true, message }));
  };
}
