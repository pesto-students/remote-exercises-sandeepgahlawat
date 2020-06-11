/* eslint-disable quotes */
import { iterPowerSet } from "./iterPowerSet";

describe("iterPowerSet", () => {
  test("set with primitive value", () => {
    const input = new Set();
    input.add(1);
    input.add(2);
    input.add(3);
    const expected = iterPowerSet(input);
    const result = new Set();
    result.add([3, 2, 1]);
    result.add([2, 1]);
    result.add([3, 1]);
    result.add([1]);
    result.add([3, 2]);
    result.add([3]);
    result.add([2]);
    result.add([]);
    for (const value of result.values()) {
      expect(expected).toContainEqual(value);
    }
  });

  test("set with non primitive value", () => {
    const input = new Set();
    input.add({ a: 1 });
    input.add({ b: 2 });
    input.add({ c: 3 });
    const expected = iterPowerSet(input);
    const result = new Set();
    result.add([{ c: 3 }, { b: 2 }, { a: 1 }]);
    result.add([{ b: 2 }, { a: 1 }]);
    result.add([{ c: 3 }, { a: 1 }]);
    result.add([{ c: 3 }, { b: 2 }]);
    result.add([{ a: 1 }]);
    result.add([{ b: 2 }]);
    result.add([{ c: 3 }]);
    result.add([]);
    for (const value of result.values()) {
      expect(expected).toContainEqual(value);
    }
  });
});
