import { expect } from "chai";
import { degreesToRadians, radiansToDegrees } from "../src/utils/angle-functions";

describe('Angle functions', () => {
    describe('radiansToDegrees', () => {
        it("should convert radians to degrees", () => {
            expect(radiansToDegrees(Math.PI)).to.equal(180);
        });
    })

    describe('degreesToRadians', () => {
        it("should convert degrees to radians", () => {
            expect(degreesToRadians(90)).to.equal(Math.PI / 2);
        });
    })
})