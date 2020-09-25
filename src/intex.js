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
var isValueNegativeZero = function (value) {
    var check = function (value) {
        return value === 0 && 1 / value === Number.NEGATIVE_INFINITY;
    };
    return check(value);
};
var AreBothNegativeZero = function (value1, value2) {
    if (isValueNegativeZero(value1) && isValueNegativeZero(value2)) {
        return true;
    }
    return false;
};
function testIsEqual(value1, value2) {
    if (AreBothNaN(value1, value2)) {
        return true;
    }
    else if (AreBothNegativeZero(value1, value2)) {
        return true;
    }
    else if (isValueNegativeZero(value1) && value2 === 0) {
        return false;
    }
    else {
        return value1 === value2;
    }
}
exports.testIsEqual = testIsEqual;
