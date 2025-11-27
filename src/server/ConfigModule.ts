import * as fs from "fs";
import * as path from "path";

class ConfigModule {
  config = {};

  constructor() {
    this.loadConfig();
  }

  /**
   * Loads a file from file system and returns content as JSON object.
   */
  loadJSON = (file: string) => {
    const fullPath = path.resolve(file + ".json");
    try {
      if (!fs.existsSync(fullPath)) {
        console.log(new Error(`Configuration file ${file}.json not found`));
        return {};
      }
    } catch (err) {
      return {};
    }

    try {
      let obj = JSON.parse(fs.readFileSync(fullPath, "utf8"));
      return obj;
    } catch (err) {
      console.log(err);
      return {};
    }
  };

  loadConfig = () => {
    this.config = this.loadJSON("./cfg");
  };

  getConfigValue = (
    match: string | undefined | null = null
  ): any | string | null => {
    if (match) {
      const pieces: string[] = match.split(".");
      let matched: Record<string, any> | undefined = { ...this.config };
      pieces.forEach((p) => {
        if (matched?.[p]) {
          matched = matched[p];
        }
        matched = undefined;
      });
      return matched;
    }
    return this.config;
  };
}

export let configModule = new ConfigModule();
