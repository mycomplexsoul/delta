class DateUtility {
  elapsedTime(date1: Date, date2: Date): number {
    // return diff in seconds
    if (date1 && date2) {
      return Math.floor((date1.getTime() - date2.getTime()) / 1000);
    }
    return 0;
  }

  elapsedDays(date1: Date, date2: Date): number {
    return Math.floor(
      this.elapsedTime(this.dateOnly(date1), this.dateOnly(date2)) /
        (60 * 60 * 24)
    );
  }

  age(baseDate: Date) {
    return this.elapsedDays(new Date(baseDate), new Date());
  }

  dateOnly(base?: Date): Date {
    if (base) {
      return new Date(
        base.getFullYear(),
        base.getMonth(),
        base.getDate(),
        0,
        0,
        0
      );
    }
    let newDate = new Date();
    return new Date(
      newDate.getFullYear(),
      newDate.getMonth(),
      newDate.getDate(),
      0,
      0,
      0
    );
  }

  addDays(base: Date, days: number): Date {
    return new Date(base.getTime() + days * 86400000);
  }

  newDateUpToSeconds(): Date {
    return new Date(Math.floor(new Date().getTime() / 1000) * 1000);
  }

  /**
   * Fills string left or right to complete a given length with some char.
   * direction = 1 fills at right, direction = -1 fills at left
   */
  fillString(
    data: string | number,
    length: number,
    direction: number = 1,
    fillChar: string = " "
  ) {
    let str = data + "";
    while (str.length < length) {
      if (direction === 1) {
        str += fillChar;
      } else {
        str = fillChar + str;
      }
    }
    return str;
  }

  /**
   * Returns formated date as specified in format or default if not provided.
   */
  formatDate(date: Date | string, format: string = "yyyy-MM-dd") {
    if (date === null) {
      return null;
    }
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    const day: number = date.getDate();
    const month: number = date.getMonth();
    const year: number = date.getFullYear();
    const hour: number = date.getHours();
    const min: number = date.getMinutes();
    const sec: number = date.getSeconds();
    const zero: string = "0";

    const str: string = format
      .replace("yyyy", String(year))
      .replace("MM", this.fillString(month + 1, 2, -1, zero))
      .replace("dd", this.fillString(day, 2, -1, zero))
      .replace("HH", this.fillString(hour, 2, -1, zero))
      .replace("mm", this.fillString(min, 2, -1, zero))
      .replace("ss", this.fillString(sec, 2, -1, zero));
    return str;
  }

  lastDayInMonth(year: number, month: number): number {
    let date: Date = new Date(year, month + 1, 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
  }

  addMonths(date: Date, months: number): Date {
    let newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
  }

  addMinutes(date: Date, minutes: number): Date {
    const newDate = new Date(date.getTime() + minutes * 60 * 1000);
    return newDate;
  }

  isDate(date: string): boolean {
    const format = /\d{4}-\d{2}-\d{2}/;
    return date.length === 10 && format.test(date);
  }

  getMonthName(month: number) {
    const months: string[] = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return months[month - 1];
  }

  getMonthNameSpanish(month: number) {
    const months: string[] = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    return months[month - 1];
  }

  getIterableNextMonth(year: number, month: number) {
    if (month === 12) {
      return this.getIterableCurrentMonth(year + 1, 1);
    } else {
      return this.getIterableCurrentMonth(year, month + 1);
    }
  }

  getIterablePreviousMonth(year: number, month: number) {
    if (month === 1) {
      return this.getIterableCurrentMonth(year - 1, 12);
    } else {
      return this.getIterableCurrentMonth(year, month - 1);
    }
  }

  getIterableCurrentMonth(year: number, month: number) {
    return {
      year,
      month,
      iterable: year * 100 + month
    };
  }

  // returns the timestamp part (hours, minutes, seconds) as the number of seconds after 00:00:00
  getTimeOnlyInSeconds(date: Date): number {
    const base: Date = this.dateOnly(date);
    return (date.getTime() - base.getTime()) / 1000;
  }

  stringDateToDate(date: string) {
    if (/\d{4}-\d{2}-\d{2}/.test(date)) {
      // looks like a date
      const s: Array<string> = date.split("-");
      return new Date(parseInt(s[0]), parseInt(s[1]) - 1, parseInt(s[2]));
    }
    return undefined;
  }

  dateToStringDate(date: Date): string {
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return [
      date.getFullYear(),
      (mm > 9 ? "" : "0") + mm,
      (dd > 9 ? "" : "0") + dd
    ].join("-");
  }

  timeFromDateAsString(date: Date): string {
    const hour: number = date.getHours();
    const min: number = date.getMinutes();
    const sec: number = date.getSeconds();
    const zero: string = "0";

    const str: string = `${this.fillString(
      hour,
      2,
      -1,
      zero
    )}:${this.fillString(min, 2, -1, zero)}:${this.fillString(
      sec,
      2,
      -1,
      zero
    )}`;
    return str;
  }

  /**
   * Format as a timestamp a positive number being interpreted as elapsed time
   * with a provided format.
   * @param elapsed Positive number interpreted as elapsed time
   * @param format Format to use, example: [HH]:[mm]:[ss]
   */
  formatTime(elapsed: number, format: String = undefined): String {
    // time in seconds
    let days: number = Math.floor(elapsed / (60 * 60 * 24));
    let hour: number = Math.floor((elapsed - days * 60 * 60 * 24) / (60 * 60));
    let min: number = Math.floor(
      (elapsed - days * 60 * 60 * 24 - hour * 60 * 60) / 60
    );
    let sec: number = Math.round(
      elapsed - days * 60 * 60 * 24 - hour * 60 * 60 - min * 60
    );
    const zero: string = "0";

    if (!format.includes("d")) {
      hour = Math.floor(elapsed / (60 * 60));
    }

    const str: string = format
      .replace("[dd]", this.fillString(days, 2, -1, zero))
      .replace("[d]", String(days))
      .replace("0d", "")
      .replace("[HH]", this.fillString(hour, 2, -1, zero))
      .replace("[H]", String(hour))
      .replace("[mm]", this.fillString(min, 2, -1, zero))
      .replace("[m]", String(min))
      .replace("[ss]", this.fillString(sec, 2, -1, zero))
      .replace("[s]", String(sec))
      .replace("m0s", "m")
      .replace("h0m", "h");

    return ["0h", "0h0", "0h0m"].indexOf(str) !== -1 ? "0" : str;
  }

  /**
   * Returns formated date as specified in format or default if not provided.
   * If a number is provided, it will be assumed to be number of seconds.
   * Allows to extract either a date or a timestamp in any formatted string form:
   * examples: yyyy-MM-dd | 23h30m | MM-dd
   */
  formatTimestamp(
    date: Date | string | number,
    format: string = "[yyyy]-[MM]-[dd] [HH]:[mm]:[ss]"
  ) {
    if (date === null) {
      return null;
    }

    if (typeof date === "number") {
      return this.formatTime(date, format);
    }
    if (!(date instanceof Date)) {
      date = new Date(date);
    }
    const day: number = date.getDate();
    const month: number = date.getMonth();
    const year: number = date.getFullYear();
    const hour: number = date.getHours();
    const min: number = date.getMinutes();
    const sec: number = date.getSeconds();
    const zero: string = "0";

    const str: string = format
      .replace("[yyyy]", String(year))
      .replace("[MM]", this.fillString(month + 1, 2, -1, zero))
      .replace("[dd]", this.fillString(day, 2, -1, zero))
      .replace("[HH]", this.fillString(hour, 2, -1, zero))
      .replace("[mm]", this.fillString(min, 2, -1, zero))
      .replace("[ss]", this.fillString(sec, 2, -1, zero));
    return str;
  }
}

export let DateUtils = new DateUtility();
