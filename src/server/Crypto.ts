import * as crypto from "crypto";
import { configModule } from "./ConfigModule";
const algorithm = "aes-256-cbc";
const key = Buffer.from(
  configModule.getConfigValue("encryption.private"),
  "hex"
); // crypto.randomBytes(32);
const iv = Buffer.from(configModule.getConfigValue("encryption.public"), "hex"); // crypto.randomBytes(16);

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

  encrypt = (text: any) => {
    let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
  };

  decrypt = (text: any) => {
    let iv = Buffer.from(text.iv, "hex");
    let encryptedText = Buffer.from(text.encryptedData, "hex");
    let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  };
}
