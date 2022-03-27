/* tslint:disable:no-unused-variable */
import { DateUtils } from './DateUtility';

////////  SPECS  /////////////

describe('DateUtility', () => {
    describe('elapsedTime(date1, date2) => number', () => {
        it('should return elapsed time for provided dates', () => {
            const date1 = new Date(2017,10,8,11,50,25);
            const date2 = new Date(2017,10,8,0,0,0);

            const expected = 11 * 60*60 + 50*60 + 25;
            
            expect(DateUtils.elapsedTime(date1, date2)).toBe(expected);
        });
        
        it('should return elapsed time positive when date1 > date2', () => {
            const date1 = new Date(2017,10,8,11,50,25);
            const date2 = new Date(2017,10,8,0,0,0);

            const expected = 11 * 60*60 + 50*60 + 25;
            
            expect(DateUtils.elapsedTime(date1, date2)).toBe(expected);
        });

        it('should return elapsed time negative when date1 < date2', () => {
            const date1 = new Date(2017,10,8,0,0,0);
            const date2 = new Date(2017,10,8,11,50,25);

            const expected = -1 * (11 * 60*60 + 50*60 + 25);
            
            expect(DateUtils.elapsedTime(date1, date2)).toBe(expected);
        });
    });
});
