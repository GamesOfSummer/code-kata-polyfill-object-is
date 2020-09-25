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

export function testIsEqual(value1: any, value2: any): boolean {
  if (AreBothNaN(value1, value2)) {
    return true;
  } else {
    return value1 === value2;
  }
}
