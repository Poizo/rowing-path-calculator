Month() + 1);
        const strday = DateHelper.addZeroBeforeDigit(date.getUTCDate());

        return `${strday}/${strmonth}/${year}`;
    }

    public static fromDateToDisplayedTimeString(date?: Date): string | undefined {
        if (isNil(date) || !isValid(date)) {
            return undefined;
        } else {
            return format(date, 'HH\'h\'mm');
        }
    }

    /**
     * Return a Date representing now but in UTC mode
     */
    public static UTCNow(): Date {
        const now = new Date();
        // eslint-disable-next-line max-len
        return new Date(`${DateHelper.addZerosBeforeYear(now.getFullYear())}-${DateHelper.addZeroBeforeDigit(now.getMonth() + 1)}-${DateHelper.addZeroBeforeDigit(now.getDate())}`);
    }

    /**
     * Transform date to UTC without apply timezone translation
     */
    public static dateAsUTC(date: Date): Date {
        // eslint-disable-next-line max-len
        return new Date(`${DateHelper.addZerosBeforeYear(date.getFullYear())}-${DateHelper.addZeroBeforeDigit(date.getMonth() + 1)}-${DateHelper.addZeroBeforeDigit(date.getDate())}`);
    }

    /**
     * @description get date by year, formatted, default gives you january 1st from current year: '2020-01-01'
     * or the current date if you do not desire first day of year
     */
    public static getDateFormattedByYear(
        year = getYear(new Date()),
        isFirstDayOfYear = true,
        isLastDayOfYear = false): string {

        const formatStr = 'yyyy-MM-dd';

        return format(parse(`${year}${isFirstDayOfYear ? '-01-01' : isLastDayOfYear ? '-12-31' : ''}`, formatStr, new Date()), formatStr);
    }

    private static addZeroBeforeDigit(nombre: number): string {
        return (nombre <= 9) ? `0${nombre}` : nombre.toString();
    }

    private static addZerosBeforeYear(year: number): string {
        const yearString = year.toString();
        return (yearString.length < 4) ? `0000${year}`.slice(-4) : yearString;
    }

}
import { format, getYear, parse } from 'date-fns';
import { isValid } from 'date-fns/esm';
import { isNil } from 'lodash';

export class DateHelper {

    public static fromUTCStringToDate(utcString?: string): Date | undefined {
        return utcString ? new Date(utcString) : undefined;
    }

    /**
     * Provide an UTC string representation of a Date.
     * /!\ If the date is not defined or not valid, return undefined
     * @param date The date created with ISO format
     * @param withTime true for a DateTime ISO Format, false for a Date ISO format
     */
    public static fromDateToUTCString(date?: Date, withTime: boolean = false): string | undefined {

        if (isNil(date) || !isValid(date)) {
            return undefined;
        }

        let returnedValue;

        if (!withTime) {
            const year = DateHelper.addZerosBeforeYear(date.getFullYear());
            const strmonth = DateHelper.addZeroBeforeDigit(date.getMonth() + 1);
            const strday = DateHelper.addZeroBeforeDigit(date.getDate());
            returnedValue = `${year}-${strmonth}-${strday}`;
        } else {
            returnedValue = date.toISOString();
        }

        return returnedValue;
    }

    public static fromDateToDisplayedString(date?: Date): string | undefined {

        if (isNil(date) || !isValid(date)) {
            return undefined;
        }

        const year = DateHelper.addZerosBeforeYear(date.getUTCFullYear());
        const strmonth = DateHelper.addZeroBeforeDigit(date.getUTC