import { testIsEqual } from "./intex";

describe("dobCheck()", () => {
  test("Validates Correctly", () => {
    expect(testIsEqual(3, 3)).toStrictEqual(true);
    expect(testIsEqual(null, null)).toStrictEqual(true);
    expect(testIsEqual(NaN, NaN)).toStrictEqual(true);
    expect(testIsEqual(-0, -0)).toStrictEqual(true);
    expect(testIsEqual(-0, 0)).toStrictEqual(false);
    expect(testIsEqual(undefined, undefined)).toStrictEqual(true);
  });
});
