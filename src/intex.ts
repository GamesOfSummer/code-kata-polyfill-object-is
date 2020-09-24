export function testIsEqual(value1: any, value2: any): boolean {
  if (
    isNaN(value1) ||
    isNaN(value2) ||
    value1 === Infinity ||
    value1 === -Infinity ||
    value2 === Infinity ||
    value2 === -Infinity
  ) {
    return true;
  } else {
    return value1 === value2;
  }
}
