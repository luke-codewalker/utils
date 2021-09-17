import { expect } from 'chai';
import { limit, map } from '../src/utils/transform-functions';

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
})