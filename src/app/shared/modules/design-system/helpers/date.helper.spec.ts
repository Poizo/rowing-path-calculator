import { DateHelper } from './date.helper';

describe('Helper Date', () => {

    it('should create an UTC date from UTC String', () => {
        expect(DateHelper.fromUTCStringToDate('2019-12-12')).toEqual(new Date('2019-12-12'));
        expect(DateHelper.fromUTCStringToDate(undefined)).toBeUndefined();
    });

    it('should create an UTC Date String from a Date', () => {
        const date = new Date('2019-12-12');
        expect(DateHelper.fromDateToUTCString(date)).toBe('2019-12-12');
        expect(DateHelper.fromDateToUTCString(date, true)).toBe('2019-12-12T00:00:00.000Z');
        expect(DateHelper.fromDateToUTCString(date, true)).toBe('2019-12-12T00:00:00.000Z');

        // Special case with zero digit
        expect(DateHelper.fromDateToUTCString(new Date('0019-02-05'))).toBe('0019-02-05');
    });

    it('should not create an UTC Date String from a Date and return undefined', () => {
        const invalidDate = new Date('2019-12-32');
        expect(DateHelper.fromDateToUTCString(undefined)).toBeUndefined();
        expect(DateHelper.fromDateToUTCString(invalidDate)).toBeUndefined();
    });

    it('should create a Zoned Date', () => {
        const date = DateHelper.fromUTCStringToDate('2019-12-12T00:00:00.000Z');
        const difInHour = (date!.getTimezoneOffset() / 60);
        expect(date!.getHours() + difInHour).toBe(date!.getUTCHours());
    });

    it('should get date formatted by year', () => {
        expect(DateHelper.getDateFormattedByYear(2019)).toEqual('2019-01-01');
        expect(DateHelper.getDateFormattedByYear(2020, false, true)).toEqual('2020-12-31');
    });

    describe('should execute UTCNow', () => {

        it('should create today but in UTC Date', () => {
            const utcNow = DateHelper.UTCNow();
            const GMTnow = new Date();
            const difInHour = (GMTnow.getTimezoneOffset() / 60);
            expect(utcNow.getHours()).toEqual(0 - difInHour);
            expect(utcNow.getUTCHours()).toEqual(0);
            expect(utcNow.getDate()).toEqual(GMTnow.getDate());
        });
    });

    it('should format date to displayed string', () => {
        expect(DateHelper.fromDateToDisplayedString(new Date('2020-09-09'))).toEqual('09/09/2020');
        expect(DateHelper.fromDateToDisplayedString(undefined)).toEqual(undefined);
    });

    it('should format date to displayed time string', () => {
        expect(DateHelper.fromDateToDisplayedTimeString(new Date('2020-09-09 15:20:35'))).toEqual('15h20');
        expect(DateHelper.fromDateToDisplayedString(undefined)).toEqual(undefined);
    });

});
