"use strict";
exports.__esModule = true;
exports.testIsEqual = void 0;
function testIsEqual(value1, value2) {
    if (isNaN(value1) ||
        isNaN(value2) ||
        value1 === Infinity ||
        value1 === -Infinity ||
        value2 === Infinity ||
        value2 === -Infinity) {
        return true;
    }
    else {
        return value1 === value2;
    }
}
exports.testIsEqual = testIsEqual;
