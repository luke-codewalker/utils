import { expect } from "chai";
import { random, pickRandom } from "../src/math-utils/random-functions";

describe('Math utility functions: random functions', () => {
    describe('random', () => {
        it("should work without arguments", () => {
            const r = random();
            expect(r).is.gte(0).and.lt(1);
        });

        it("should work with only one argument", () => {
            const bound = 10;
            const r = random(bound);
            expect(r).is.gte(0).and.lt(bound);
        });


        it("should generate a number in the given range", () => {
            const min = 5;
            const max = 10;
            const r = random(min, max);
            expect(r).is.gte(min).and.lt(max);
        });
    })

    describe('pickRandom', () => {
        it("should return a value from the given array", () => {
            const val = 'banana';
            const picks = [];
            const runs = 10;
            for (let i = 0; i < runs; i++) {
                picks.push(pickRandom([val]));
            }

            expect(picks).to.have.same.members(Array(runs).fill(val));
        });
    })
})