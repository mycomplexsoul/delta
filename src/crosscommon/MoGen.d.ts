declare class _MoGen {
    /**
     * Concatenates a string with another string based on the condition that the first string is empty or not.
     * If the first is empty, it returns empty (without concatening)
     * If the first is not empty, it returns the concatenation of both
     * @param {string} value string to validate its contents, it decides if it will be a concatenation
     * @param {string} string_to_concatenate string to be concatenated if the condition meets
     * @return {string} a concatenated string of empty or of both strings
     */
    concat: (value: string, string_to_concatenate: string) => string;
    parseApostrophe: (str: string) => string;
    parseApostropheForSQL: (str: string) => string;
}
export declare let MoGen: _MoGen;
export {};
//# sourceMappingURL=MoGen.d.ts.map