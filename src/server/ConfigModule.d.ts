declare class ConfigModule {
    config: {};
    constructor();
    /**
     * Loads a file from file system and returns content as JSON object.
     */
    loadJSON: (file: string) => any;
    loadConfig: () => void;
    getConfigValue: (match?: string | undefined | null) => any | string | null;
}
export declare let configModule: ConfigModule;
export {};
//# sourceMappingURL=ConfigModule.d.ts.map