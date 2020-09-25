"use strict";
exports.__esModule = true;
var intex_1 = require("./intex");
describe("dobCheck()", function () {
    test("Validates Correctly", function () {
        expect(intex_1.testIsEqual(3, 3)).toStrictEqual(true);
        expect(intex_1.testIsEqual(null, null)).toStrictEqual(true);
        expect(intex_1.testIsEqual(NaN, NaN)).toStrictEqual(true);
        expect(intex_1.testIsEqual(NaN, 0)).toStrictEqual(false);
        expect(intex_1.testIsEqual(-0, -0)).toStrictEqual(true);
        expect(intex_1.testIsEqual(-0, 0)).toStrictEqual(false);
        expect(intex_1.testIsEqual(undefined, undefined)).toStrictEqual(true);
        expect(intex_1.testIsEqual(undefined, null)).toStrictEqual(false);
        expect(intex_1.testIsEqual(null, undefined)).toStrictEqual(false);
    });
});
