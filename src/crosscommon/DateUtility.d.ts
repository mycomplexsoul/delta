declare class DateUtility {
    daysForLocale: (localeName?: "en" | "es", weekday?: "long" | "short" | "narrow") => any[];
    elapsedTime(date1: Date, date2: Date): number;
    elapsedDays(date1: Date, date2: Date): number;
    age(baseDate: Date): number;
    dateOnly(base?: Date): Date;
    addDays(base: Date, days: number): Date;
    newDateUpToSeconds(): Date;
    /**
     * Fills string left or right to complete a given length with some char.
     * direction = 1 fills at right, direction = -1 fills at left
     */
    fillString(data: string | number, length: number, direction?: number, fillChar?: string): string;
    /**
     * Returns formated date as specified in format or default if not provided.
     */
    formatDate(date: Date | string, format?: string): string;
    lastDayInMonth(year: number, month: number): number;
    addMonths(date: Date, months: number): Date;
    addMinutes(date: Date, minutes: number): Date;
    addSeconds(date: Date, seconds: number): Date;
    isDate(date: string): boolean;
    getMonthName(month: number): string;
    getMonthNameSpanish(month: number): string;
    getDayName(day: number, lang?: string): string;
    getIterableNextMonth(year: number, month: number): {
        year: number;
        month: number;
        iterable: number;
    };
    getIterablePreviousMonth(year: number, month: number): {
        year: number;
        month: number;
        iterable: number;
    };
    getIterableCurrentMonth(year: number, month: number): {
        year: number;
        month: number;
        iterable: number;
    };
    getTimeOnlyInSeconds(date: Date): number;
    stringDateToDate(date: string): Date;
    dateToStringDate(date: Date): string;
    timeFromDateAsString(date: Date): string;
    /**
     * Format as a timestamp a positive number being interpreted as elapsed time
     * with a provided format.
     * @param elapsed Positive or negative number interpreted as elapsed time
     * @param format Format to use, example: [HH]:[mm]:[ss]
     */
    formatTime(elapsed: number, format?: string): string;
    /**
     * Returns formated date as specified in format or default if not provided.
     * If a number is provided, it will be assumed to be number of seconds.
     * Allows to extract either a date or a timestamp in any formatted string form:
     * examples: yyyy-MM-dd | 23h30m | MM-dd
     */
    formatTimestamp(date: Date | string | number, format?: string): string;
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
    parseTime(duration: string): number;
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
    parseDatetime(expression: string): {
        date_start: Date;
        date_end: Date;
        duration: number;
        pattern: string;
    };
    getCurrentMonth(): number;
    getCurrentYear(): number;
}
export declare let DateUtils: DateUtility;
export {};
//# sourceMappingURL=DateUtility.d.ts.map