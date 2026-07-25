export declare class Crypto {
    /**
     * generates random string of characters i.e salt
     * @function
     * @param {number} length - Length of the random string.
     */
    genRandomString: (length: number) => string;
    createSalt: () => string;
    /**
     * hash password with sha512.
     * @function
     * @param {string} password - List of required fields.
     * @param {string} salt - Data to be validated.
     */
    sha512: (password: string, salt: string) => {
        salt: string;
        hashPassword: string;
    };
    /**
     * Hashes a password with a new created salt for user creation or
     * If salt is provided, uses provided salt to rebuild the hash
     */
    saltHashPassword: (userpassword: string, saltToVerify?: string | null) => {
        salt: string;
        hashPassword: string;
    };
    encrypt: (text: any) => {
        iv: string;
        encryptedData: string;
    };
    decrypt: (text: any) => string;
}
//# sourceMappingURL=Crypto.d.ts.map