const AreBothNaN = (value1: any, value2: any) => {
  if (
    typeof value1 === "number" &&
    value1 !== value1 &&
    typeof value2 === "number" &&
    value2 !== value2
  ) {
    return true;
  }

  return false;
};

const isValueNegativeZero = (value: any) => {
  const check = (value: any) => {
    return value === 0 && 1 / value === Number.NEGATIVE_INFINITY;
  };
  return check(value);
};

const AreBothNegativeZero = (value1: any, value2: any) => {
  if (isValueNegativeZero(value1) && isValueNegativeZero(value2)) {
    return true;
  }

  return false;
};

export function testIsEqual(value1: any, value2: any): boolean {
  if (AreBothNaN(value1, value2)) {
    return true;
  } else if (AreBothNegativeZero(value1, value2)) {
    return true;
  } else if (isValueNegativeZero(value1) && value2 === 0) {
    return false;
  } else {
    return value1 === value2;
  }
}
