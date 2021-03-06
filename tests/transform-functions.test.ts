import { expect } from 'chai';
import { limit, map, norm } from '../src/utils/transform-functions';

describe('Transform functions', () => {
    describe('limit', () => {
        it('should limit a number to upper bound', () => {
            const limited = limit(10, 0, 5);
            expect(limited).to.equal(5);
        });

        it('should limit a number to lower bound', () => {
            const limited = limit(-10, 0, 5);
            expect(limited).to.equal(0);
        });

        it('should just return values if inside bounds', () => {
            const limited = limit(2.45, 0, 5);
            expect(limited).to.equal(2.45);
        });

        it('should throw an error on incorrect bounds', () => {
            expect(() => limit(10, 5, 0)).to.throw();
        });
    })

    describe('map', () => {
        it('should map number from one range into another', () => {
            const mapped = map(50, 0, 100, 0, 1);
            expect(mapped).to.equal(0.5);
        })

        it('should not constrain the value to the new range by default', () => {
            const mapped = map(110, 0, 100, 0, 1);
            expect(mapped).to.equal(1.1);
        })

        it('should constrain the value to the new range if required', () => {
            const mapped = map(110, 0, 100, 0, 1, true);
            expect(mapped).to.equal(1);

            const otherMapped = map(110, 100, 0, 0, 1, true);
            expect(otherMapped).to.equal(0);
        })

        it('should be able to deal with inverted ranges', () => {
            const mapped = map(20, 100, 0, 0, 100);
            expect(mapped).to.equal(80);

            const otherMapped = map(20, 0, 100, 100, 0);
            expect(otherMapped).to.equal(80);
        })
    })

    describe('norm', () => {
        it('should normalize a value from any range to between 0 and 1', () => {
            const normed = norm(75, 0, 100);
            expect(normed).to.equal(0.75)
        })

        it('should constrain a value when normalizing', () => {
            const normed = norm(175, 0, 100);
            expect(normed).to.equal(1.0)
        })
    })
})