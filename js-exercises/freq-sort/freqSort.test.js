/* eslint-disable quotes */
import { freqSort } from "./freqSort";

describe("function freq sort ", () => {
  test("Sort array with ascii characters", () => {
    const expected = freqSort(["s", "f", "g", "d", "s", "s", "f"]);
    const result = ["s", "f", "g", "d"];
    expect(expected).toStrictEqual(result);
  });

  test("Sort array with non-ascii characters", () => {
    const expected = freqSort(["π", "π", "˚", "˚", "©", "˚", "¬"]);
    const result = ["˚", "π", "©", "¬"];
    expect(expected).toStrictEqual(result);
  });

  test("Sort array with non-ascii glypheme characters", () => {
    const expected = freqSort(["ñ", "ñ", "˚", "˚", "ñ", "ñ", "ñ"]);
    const result = ["ñ", "ñ", "˚"];
    expect(expected).toStrictEqual(result);
  });
});
