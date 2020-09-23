import { testIsEqual } from "./intex";
import { strict as assert } from "assert";

describe("dobCheck()", () => {
  test("Validates Correctly", () => {
    expect(testIsEqual(3, 3)).toStrictEqual(true);
    expect(testIsEqual(null, null)).toStrictEqual(true);

    expect(testIsEqual(NaN, NaN)).toStrictEqual(true);

    expect(testIsEqual(-0, -0)).toStrictEqual(true);

    expect(testIsEqual(undefined, undefined)).toStrictEqual(true);
  });
});
