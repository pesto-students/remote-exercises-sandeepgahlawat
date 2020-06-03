/* eslint-disable comma-dangle */
/* eslint-disable no-sparse-arrays */
/* eslint-disable quotes */
// Write your own test cases.
import { forEach, map, filter, reduce } from "./arrayUtils";

describe("forEach", () => {
  test("Check if callback is called for every elemnt of the array", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([1, 2, 3, 4, 5, 6])(mockCallback);
    expect(mockCallback.mock.calls.length).toBe(6);
  });

  test("Callback should not be called for values not provided in sparse array", () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([1, 2, 3, , 5, 6])(mockCallback);
    expect(mockCallback.mock.calls.length).toBe(5);
  });

  test("for each with thisArgs", () => {
    const mockCallback = jest.fn(function callback(x) {
      return x + this.age;
    });
    forEach([1, 2])(mockCallback, { name: "sandeep", age: 29 });
    expect(mockCallback.mock.calls.length).toBe(2);
  });

  test("Callback has to be a function", () => {
    const expected = () => {
      forEach([1, 2])({});
    };
    expect(expected).toThrow(Error);
  });
});

describe("Map function", () => {
  test("Check if the mapped array is correct ", () => {
    const expected = map([1, 2, 3, 4, 5, 6])((value) => 2 * value);
    expect(expected).toStrictEqual([2, 4, 6, 8, 10, 12]);
  });

  test("map an array containing objects", () => {
    const expected = map([
      { a: 1, b: 2 },
      { a: 3, b: 4 },
    ])((value) => value.a + value.b);
    expect(expected).toStrictEqual([3, 7]);
  });

  test("for each with thisArgs", () => {
    const expected = map([1, 2])(
      function callback(value) {
        return value + this.age;
      },
      { name: "sandeep", age: 29 }
    );
    expect(expected).toStrictEqual([30, 31]);
  });

  test("Callback has to be a function", () => {
    const expected = () => {
      map([1, 2])({});
    };
    expect(expected).toThrow(Error);
  });
});

describe("Filter function", () => {
  test("Check if the filtered array is correct ", () => {
    const expected = filter([1, 2, 3, 4, 5, 6])((value) => 2 * value < 10);
    expect(expected).toStrictEqual([1, 2, 3, 4]);
  });

  test("filter an array containing objects", () => {
    const expected = filter([
      { a: 1, b: 2 },
      { a: 3, b: 4 },
    ])((value) => value.a + value.b > 5);
    expect(expected).toStrictEqual([{ a: 3, b: 4 }]);
  });

  test("filter with thisArgs", () => {
    const expected = filter([1, 2])(
      function callback(value) {
        return value + this.age > 30;
      },
      { name: "sandeep", age: 29 }
    );
    expect(expected).toStrictEqual([2]);
  });

  test("Callback has to be a function", () => {
    const expected = () => {
      filter([1, 2])({});
    };
    expect(expected).toThrow(Error);
  });
});

describe("Reduce function", () => {
  test("Check if the accumulated sum is correct ", () => {
    const expected = reduce([1, 2, 3, 4, 5, 6])(
      (initial, current) => initial + current,
      0
    );
    expect(expected).toBe(21);
  });

  test("Callback has to be a function", () => {
    const expected = () => {
      reduce([1, 2])({});
    };
    expect(expected).toThrow(Error);
  });
});
