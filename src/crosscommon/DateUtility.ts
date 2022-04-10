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
    let date: Date = new Date(year, month, 1);
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

  addSeconds(date: Date, seconds: number): Date {
    const newDate = new Date(date.getTime() + seconds * 1000);
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
   * @param elapsed Positive or negative number interpreted as elapsed time
   * @param format Format to use, example: [HH]:[mm]:[ss]
   */
  formatTime(elapsed: number, format: String = undefined): String {
    const unsignedElapsed: number = Math.abs(elapsed);
    // time in seconds
    let days: number = Math.floor(unsignedElapsed / (60 * 60 * 24));
    let hour: number = Math.floor((unsignedElapsed - days * 60 * 60 * 24) / (60 * 60));
    let min: number = Math.floor(
      (unsignedElapsed - days * 60 * 60 * 24 - hour * 60 * 60) / 60
    );
    let sec: number = Math.round(
      unsignedElapsed - days * 60 * 60 * 24 - hour * 60 * 60 - min * 60
    );
    const zero: string = "0";

    if (!format.includes("d")) {
      hour = Math.floor(unsignedElapsed / (60 * 60));
    }

    let str: string = format
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
    
    if (str.startsWith('00:')) { // HH
      str = str.replace('00:', '');
    }
    if (str.startsWith('00:')) { // mm
      str = str.replace('00:', '');
    }

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

  /**
   * Given a duration in string format, it parses it and returns
   * the same duration in integer format, where the value represents
   * the amount of minutes of the same duration provided.
   * 
   * Examples
   * parseTime('30') => 30
   * parseTime('1h') => 60
   * parseTime('2h15') => 135
   * parseTime('3:40') => 220
   * parseTime('3:40') => 220
   * parseTime('5h5m') => 305
   * 
   * @param duration string representation of a duration in hours and minutes
   * @returns An integer representing duration in minutes
   */
  parseTime(duration: string) {
    let hours = 0,
      min = 0;
    if (duration.indexOf("h") !== -1) {
      hours = parseInt(duration.substring(0, duration.indexOf("h")));
      duration = duration.replace(hours + "h", "");
    }
    if (duration.indexOf(":") !== -1) {
      hours = parseInt(duration.substring(0, duration.indexOf(":")));
      duration = duration.replace(hours + ":", "");
    }
    if (duration.indexOf("m") !== -1) {
      min = parseInt(duration.substring(0, duration.indexOf("m")));
      duration = duration.replace(min + "m", "");
    } else {
      if (duration !== "") {
        min = parseInt(duration);
        duration = duration.replace(min + "", "");
      }
    }
    if (duration === "") {
      return hours * 60 + min;
    }
    // fallback
    return parseInt(duration);
  }

  /**
   * Parses a schedule from a string.
   * 
   * Examples
   * 
   * 1) start date and time and duration -> yyyy-MM-dd HH:mm + ##h##m
   * parseDatetime('2050-01-22 15:30 + 1h30') => { date_start: new Date(2050, 0, 22, 15, 30, 0), date_end: new Date(2050, 0, 22, 17, 0, 0), duration: 90, pattern: 'yyyy-MM-dd HH:mm + ##h##m' }
   *
   * 2) start time and duration -> HH:mm + ##h##m
   * parseDatetime('9:30 + 30m') => { date_start: new Date(2040, 1, 25, 9, 30, 0), date_end: new Date(2040, 1, 25, 10, 0, 0), duration: 30, pattern: 'HH:mm + ##h##m' }
   *
   * 3) start date and time and end time -> yyyy-MM-dd HH:mm - HH:mm
   * parseDatetime('2050-01-22 15:30 - 18:00') => { date_start: new Date(2050, 0, 22, 15, 30, 0), date_end: new Date(2050, 0, 22, 18, 0, 0), duration: 150, pattern: 'yyyy-MM-dd HH:mm - HH:mm' }
   *
   * 4) start time and end time -> HH:mm - HH:mm
   * parseDatetime('8:30 - 9:00') => { date_start: new Date(2050, 0, 22, 8, 30, 0), date_end: new Date(2050, 0, 22, 9, 0, 0), duration: 30, pattern: 'HH:mm - HH:mm' }
   *
   * 5) start date and time -> yyyy-MM-dd HH:mm
   * parseDatetime('2050-01-22 6:30') => { date_start: new Date(2050, 0, 22, 6, 30, 0), pattern: 'yyyy-MM-dd HH:mm' }
   *
   * 6) time only -> HH:mm
   * parseDatetime('19:30') => { date_start: new Date(2050, 0, 22, 19, 30, 0), pattern: 'HH:mm' }
   * 
   * @param expression string representing a duration or a range conformed by a start datetime and a duration or end datetime
   * @returns an object representing the schedule with a start, end and duration
   */
  parseDatetime(expression: string) {
    let parts = <any>[];
    let parsed: boolean = false;
    const s = {
      date_start: <Date>null,
      date_end: <Date>null,
      duration: 0,
      pattern: "",
    };

    const patternTime = /\d{2}/i;
    const patternDateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/i;
    const patternDateTimeEnd = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} - \d{2}:\d{2}/i;
    const patternDateTimeDuration = /\d{4}-\d{2}-\d{2} \d{2}:\d{2} \+ /i;
    const patternTimeEnd = /\d{2}:\d{2} - \d{2}:\d{2}/i;
    const patternTimeDuration = /\d{2}:\d{2} \+ /i;

    // start date and time and duration -> yyyy-MM-dd HH:mm + ##h##m
    if (patternDateTimeDuration.test(expression)) {
      parts = expression.split(" + ");
      s.date_start = new Date(parts[0]);
      s.duration = this.parseTime(parts[1]);
      s.date_end = new Date(s.date_start.getTime() + s.duration * 60 * 1000);
      parsed = true;
      s.pattern = "yyyy-MM-dd HH:mm + ##h##m";
    }

    // start time and duration -> HH:mm + ##h##m
    if (patternTimeDuration.test(expression) && !parsed) {
      parts = expression.split(" + ");
      let min =
        parseInt(parts[0].split(":")[0]) * 60 +
        parseInt(parts[0].split(":")[1]);
      s.date_start = new Date(
        this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
          min * 60 * 1000
      );
      s.duration = this.parseTime(parts[1]);
      s.date_end = new Date(s.date_start.getTime() + s.duration * 60 * 1000);
      parsed = true;
      s.pattern = "HH:mm + ##h##m";
    }

    // start date and time and end time -> yyyy-MM-dd HH:mm - HH:mm
    if (patternDateTimeEnd.test(expression) && !parsed) {
      parts = expression.split(" - ");
      let dateOnly = parts[0].split(" ")[0];
      s.date_start = new Date(parts[0]);
      s.date_end = new Date(dateOnly + " " + parts[1]);
      s.duration = this.elapsedTime(s.date_start, s.date_end) / 60;
      parsed = true;
      s.pattern = "yyyy-MM-dd HH:mm - HH:mm";
    }

    // start time and end time -> HH:mm - HH:mm
    if (patternTimeEnd.test(expression) && !parsed) {
      parts = expression.split(" - ");
      let min1 =
        parseInt(parts[0].split(":")[0]) * 60 +
        parseInt(parts[0].split(":")[1]);
      let min2 =
        parseInt(parts[1].split(":")[0]) * 60 +
        parseInt(parts[1].split(":")[1]);
      s.date_start = new Date(
        this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
          min1 * 60 * 1000
      );
      s.date_end = new Date(
        this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
          min2 * 60 * 1000
      );
      s.duration = this.elapsedTime(s.date_start, s.date_end) / 60;
      parsed = true;
      s.pattern = "HH:mm - HH:mm";
    }

    // start date and time -> yyyy-MM-dd HH:mm
    if (patternDateTime.test(expression) && !parsed) {
      s.date_start = new Date(expression);
      parsed = true;
      s.pattern = "yyyy-MM-dd HH:mm";
    }

    // time only -> HH:mm
    if (patternTime.test(expression) && !parsed) {
      let min =
        parseInt(expression.split(":")[0]) * 60 +
        parseInt(expression.split(":")[1]);
      s.date_start = new Date(
        this.dateOnly(DateUtils.newDateUpToSeconds()).getTime() +
          min * 60 * 1000
      );
      parsed = true;
      s.pattern = "HH:mm";
    }

    return s;
  }
}

export let DateUtils = new DateUtility();
