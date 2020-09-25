"use strict";
exports.__esModule = true;
exports.testIsEqual = void 0;
var AreBothNaN = function (value1, value2) {
    if (typeof value1 === "number" &&
        value1 !== value1 &&
        typeof value2 === "number" &&
        value2 !== value2) {
        return true;
    }
    return false;
};
function testIsEqual(value1, value2) {
    if (AreBothNaN(value1, value2)) {
        return true;
    }
    else {
        return value1 === value2;
    }
}
exports.testIsEqual = testIsEqual;
