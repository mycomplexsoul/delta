import * as crypto from "crypto";

const SALT_LENGTH: number = 100;

export class Crypto {
  /**
   * generates random string of characters i.e salt
   * @function
   * @param {number} length - Length of the random string.
   */
  genRandomString = (length: number) => {
    return crypto
      .randomBytes(Math.ceil(length / 2))
      .toString("hex") /** convert to hexadecimal format */
      .slice(0, length); /** return required number of characters */
  };

  createSalt = () => this.genRandomString(SALT_LENGTH);

  /**
   * hash password with sha512.
   * @function
   * @param {string} password - List of required fields.
   * @param {string} salt - Data to be validated.
   */
  sha512 = (password: string, salt: string) => {
    const hash = crypto.createHmac(
      "sha512",
      salt
    ); /** Hashing algorithm sha512 */
    hash.update(password);
    const value = hash.digest("hex");
    return {
      salt: salt,
      hashPassword: value
    };
  };

  /**
   * Hashes a password with a new created salt for user creation or
   * If salt is provided, uses provided salt to rebuild the hash
   */
  saltHashPassword = (userpassword: string, saltToVerify: string = null) => {
    const salt: string = saltToVerify
      ? saltToVerify
      : this.genRandomString(SALT_LENGTH);
    const passwordData = this.sha512(userpassword, salt);

    return passwordData;
  };
}
