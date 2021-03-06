import { iEntity } from "./iEntity";

class Utility {
  pad(
    value: string | number,
    fillChar: string,
    length: number,
    dir: number = -1
  ) {
    let result: string = value + "";
    while (result.length < length) {
      if (dir === -1) {
        result = fillChar + result;
      } else {
        result = result + fillChar;
      }
    }
    return result;
  }

  hashId(prefix: string = "X", length: number = 32, baseDate: Date = null) {
    // take date + time + random digits
    // total digits: 1 + 10 + 6 + '-' + (length - 18) >= 32
    let date = baseDate || new Date();
    let random = Math.floor(
      Math.random() * Math.pow(10, length - 17 - prefix.length)
    );
    let datetimeString = `${date.getFullYear()}${this.pad(
      date.getMonth() + 1,
      "0",
      2
    )}${this.pad(date.getDate(), "0", 2)}`;
    datetimeString += `${this.pad(date.getHours(), "0", 2)}${this.pad(
      date.getMinutes(),
      "0",
      2
    )}${this.pad(date.getSeconds(), "0", 2)}`;
    let id = `${prefix}${datetimeString}-${random}`;
    return id;
  }

  hashIdForEntity(entity: iEntity, fieldName: string) {
    const length: number = entity.metadata.fields.find(
      f => f.dbName === fieldName
    ).size;
    return this.hashId(entity.metadata.prefix, length);
  }

  escapeRegExp(str: string) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  replaceAll(str: string, find: string, replace: string) {
    return (str + "").replace(
      new RegExp(this.escapeRegExp(find), "g"),
      replace
    );
  }

  parseSimpleQuoteForSQL(str: string) {
    return this.replaceAll(str, "'", "''");
  }

  entityToRawTableFields(entity: iEntity): any {
    let obj = {};
    if (!entity.metadata) {
      return entity;
    }
    entity.metadata.fields
      //.filter(f => f.isTableField)
      .forEach(f => {
        obj[f.dbName] = entity[f.dbName];
      });
    return obj;
  }

  getPKFromEntity(entity: iEntity): any {
    let pk = {};
    if (!entity.metadata) {
      return null;
    }
    entity.metadata.fields
      .filter(f => f.isPK)
      .forEach(f => {
        pk[f.dbName] = entity[f.dbName];
      });
    return pk;
  }

  removeMetadataFromEntity(entity: iEntity): any {
    if (!entity.metadata) {
      return entity;
    }
    // just removes metadata field
    const { metadata, ...fields } = entity;

    return fields;
  }

  buildFilter(fieldName: string, value: any, op: string = "eq") {
    const filter = {
      gc: "AND",
      cont: [
        {
          f: fieldName,
          op,
          val: value
        }
      ]
    };

    return filter;
  }

  buildFilterStringified(fieldName: string, value: any, op: string = "eq") {
    return JSON.stringify(this.buildFilter(fieldName, value, op));
  }

  retryHelper(method: Function, condition: Function, limit: number = 3) {
    for (let i = 0; i < limit; i++) {
      const methodResult = method();
      if (condition(methodResult)) {
        return methodResult;
      }
    }
    return null;
  }
}

export let Utils = new Utility();
