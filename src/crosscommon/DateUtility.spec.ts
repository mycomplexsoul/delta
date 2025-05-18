/* tslint:disable:no-unused-variable */
import { DateUtils } from "./DateUtility";

////////  SPECS  /////////////

describe("DateUtility", () => {
  describe("elapsedTime(date1, date2) => number", () => {
    it("should return elapsed time for provided dates", () => {
      const date1 = new Date(2017, 10, 8, 11, 50, 25);
      const date2 = new Date(2017, 10, 8, 0, 0, 0);

      const expected = 11 * 60 * 60 + 50 * 60 + 25;

      expect(DateUtils.elapsedTime(date1, date2)).toBe(expected);
    });

    it("should return elapsed time positive when date1 > date2", () => {
      const date1 = new Date(2017, 10, 8, 11, 50, 25);
      const date2 = new Date(2017, 10, 8, 0, 0, 0);

      const expected = 11 * 60 * 60 + 50 * 60 + 25;

      expect(DateUtils.elapsedTime(date1, date2)).toBe(expected);
    });

    it("should return elapsed time negative when date1 < date2", () => {
      const date1 = new Date(2017, 10, 8, 0, 0, 0);
      const date2 = new Date(2017, 10, 8, 11, 50, 25);

      const expected = -1 * (11 * 60 * 60 + 50 * 60 + 25);

      expect(DateUtils.elapsedTime(date1, date2)).toBe(expected);
    });
  });

  describe("elapsedDays(date1, date2) => number", () => {
    it("should return elapsed days between two dates", () => {
      const date1 = new Date(2020, 0, 10);
      const date2 = new Date(2020, 0, 1);
      expect(DateUtils.elapsedDays(date1, date2)).toBe(9);
    });
    it("should return negative days if date1 < date2", () => {
      const date1 = new Date(2020, 0, 1);
      const date2 = new Date(2020, 0, 10);
      expect(DateUtils.elapsedDays(date1, date2)).toBe(-9);
    });
  });

  describe("age(baseDate)", () => {
    it("should return the number of days from baseDate to now", () => {
      const baseDate = new Date();
      expect(DateUtils.age(baseDate)).toBe(0);
    });
  });

  describe("dateOnly(base)", () => {
    it("should return a date with time set to 00:00:00", () => {
      const date = new Date(2022, 4, 17, 15, 30, 45);
      const only = DateUtils.dateOnly(date);
      expect(only.getHours()).toBe(0);
      expect(only.getMinutes()).toBe(0);
      expect(only.getSeconds()).toBe(0);
    });
  });

  describe("addDays(base, days)", () => {
    it("should add days to a date", () => {
      const date = new Date(2022, 0, 1);
      const result = DateUtils.addDays(date, 10);
      expect(result.getDate()).toBe(11);
    });
  });

  describe("formatDate(date, format)", () => {
    it("should format date as yyyy-MM-dd", () => {
      const date = new Date(2022, 4, 7);
      expect(DateUtils.formatDate(date)).toBe("2022-05-07");
    });
    it("should format date as dd/MM/yyyy", () => {
      const date = new Date(2022, 4, 7);
      expect(DateUtils.formatDate(date, "dd/MM/yyyy")).toBe("07/05/2022");
    });
  });

  describe("lastDayInMonth(year, month)", () => {
    it("should return 28 for February 2021", () => {
      expect(DateUtils.lastDayInMonth(2021, 2)).toBe(28);
    });
    it("should return 29 for February 2020 (leap year)", () => {
      expect(DateUtils.lastDayInMonth(2020, 2)).toBe(29);
    });
  });

  describe("addMonths(date, months)", () => {
    it("should add months to a date", () => {
      const date = new Date(2022, 0, 1);
      const result = DateUtils.addMonths(date, 2);
      expect(result.getMonth()).toBe(2);
    });
  });

  describe("addMinutes(date, minutes)", () => {
    it("should add minutes to a date", () => {
      const date = new Date(2022, 0, 1, 0, 0, 0);
      const result = DateUtils.addMinutes(date, 30);
      expect(result.getMinutes()).toBe(30);
    });
  });

  describe("addSeconds(date, seconds)", () => {
    it("should add seconds to a date", () => {
      const date = new Date(2022, 0, 1, 0, 0, 0);
      const result = DateUtils.addSeconds(date, 45);
      expect(result.getSeconds()).toBe(45);
    });
  });

  describe("isDate(string)", () => {
    it("should return true for valid date string", () => {
      expect(DateUtils.isDate("2022-05-07")).toBe(true);
    });
    it("should return false for invalid date string", () => {
      expect(DateUtils.isDate("2022/05/07")).toBe(false);
    });
  });

  describe("getMonthName(month)", () => {
    it("should return correct month name", () => {
      expect(DateUtils.getMonthName(1)).toBe("January");
      expect(DateUtils.getMonthName(12)).toBe("December");
    });
  });

  describe("getMonthNameSpanish(month)", () => {
    it("should return correct Spanish month name", () => {
      expect(DateUtils.getMonthNameSpanish(1)).toBe("Enero");
      expect(DateUtils.getMonthNameSpanish(12)).toBe("Diciembre");
    });
  });

  describe("dateToStringDate(date)", () => {
    it("should return string in yyyy-MM-dd format", () => {
      const date = new Date(2022, 4, 7);
      expect(DateUtils.dateToStringDate(date)).toBe("2022-05-07");
    });
  });

  describe("timeFromDateAsString(date)", () => {
    it("should return time as HH:mm:ss", () => {
      const date = new Date(2022, 4, 7, 9, 5, 3);
      expect(DateUtils.timeFromDateAsString(date)).toBe("09:05:03");
    });
  });

  describe("formatTime(elapsed, format)", () => {
    it("should format seconds as HH:mm:ss", () => {
      expect(DateUtils.formatTime(3661, "[HH]:[mm]:[ss]")).toBe("01:01:01");
    });
    it("should format 0 as 00", () => {
      expect(DateUtils.formatTime(0, "[HH]:[mm]:[ss]")).toBe("00");
    });
  });

  describe("formatTimestamp(date, format)", () => {
    it("should format date as yyyy-MM-dd", () => {
      const date = new Date(2022, 4, 7);
      expect(DateUtils.formatTimestamp(date, "[yyyy]-[MM]-[dd]")).toBe(
        "2022-05-07"
      );
    });
    it("should format seconds as time", () => {
      expect(DateUtils.formatTimestamp(3661, "[HH]:[mm]:[ss]")).toBe(
        "01:01:01"
      );
    });
  });

  describe("parseTime(duration)", () => {
    it("should parse minutes only", () => {
      expect(DateUtils.parseTime("30")).toBe(30);
    });
    it("should parse hours only", () => {
      expect(DateUtils.parseTime("2h")).toBe(120);
    });
    it("should parse hours and minutes", () => {
      expect(DateUtils.parseTime("2h15")).toBe(135);
    });
    it("should parse time with colon", () => {
      expect(DateUtils.parseTime("3:40")).toBe(220);
    });
    it("should parse hours and minutes with h and m", () => {
      expect(DateUtils.parseTime("5h5m")).toBe(305);
    });
  });

  describe("parseDatetime(expression)", () => {
    it("should parse yyyy-MM-dd HH:mm + 1h30", () => {
      const result = DateUtils.parseDatetime("2050-01-22 15:30 + 1h30");
      expect(result.duration).toBe(90);
      expect(result.pattern).toBe("yyyy-MM-dd HH:mm + ##h##m");
    });
    it("should parse HH:mm + 30m", () => {
      const result = DateUtils.parseDatetime("09:30 + 30m");
      expect(result.duration).toBe(30);
      expect(result.pattern).toBe("HH:mm + ##h##m");
    });
    it("should parse yyyy-MM-dd HH:mm - HH:mm", () => {
      const result = DateUtils.parseDatetime("2050-01-22 15:30 - 18:00");
      expect(result.pattern).toBe("yyyy-MM-dd HH:mm - HH:mm");
    });
    it("should parse HH:mm - HH:mm", () => {
      const result = DateUtils.parseDatetime("08:30 - 09:00");
      expect(result.pattern).toBe("HH:mm - HH:mm");
    });
    it("should parse yyyy-MM-dd HH:mm", () => {
      const result = DateUtils.parseDatetime("2050-01-22 06:30");
      expect(result.pattern).toBe("yyyy-MM-dd HH:mm");
    });
    it("should parse HH:mm", () => {
      const result = DateUtils.parseDatetime("19:30");
      expect(result.pattern).toBe("HH:mm");
    });
  });
});
