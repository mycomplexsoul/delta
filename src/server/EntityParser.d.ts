import { EntityDefinition } from '../crosscommon/EntityDefinition';
export declare class EntityParser {
    /**
     * Loads a file from file system and returns content as JSON object.
     */
    loadJSON: (file: string) => any;
    /**
     * Loads entity data by file name.
     */
    loadEntityData: (entityName: string) => any;
    /**
     * Loads template for metadata for identified named cases for generation of code logic
     */
    loadTemplates: () => any;
    /**
     * Search for a given template name into the templates collection
     */
    _getTemplate: (templates: any, name: string) => any | Error;
    parse: (entityName: string) => EntityDefinition;
}
//# sourceMappingURL=EntityParser.d.ts.map