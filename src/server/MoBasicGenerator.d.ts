import { EntityDefinition } from '../crosscommon/EntityDefinition';
import iConnection from './iConnection';
export declare class MoBasicGenerator {
    entity: EntityDefinition;
    constants: any;
    constructor(entityName: string);
    saveToFile: (filename: string, contents: string) => void;
    createTypeFile: () => void;
    __validateRecordName: (entity: EntityDefinition) => boolean;
    checkEntityDefinition: () => string;
    checkEntityDefinitionAgainstDatabase: (connection: iConnection) => Promise<string>;
    getSchemaTableInformation: (connection: iConnection) => Promise<any>;
}
//# sourceMappingURL=MoBasicGenerator.d.ts.map