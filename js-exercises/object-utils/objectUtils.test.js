/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
import { map, filter, invert, merge, all, some } from "./objectUtils";

// write your own test cases

describe("map function to transform key value pairs on an object", () => {
  test("should correctly call the provided callback function", () => {
    const input = { car: 4, bike: 2, cycle: 2, snake: 0 };
    Object.defineProperty(input, "octopus", {
      value: 8,
    });
    const result = { car: 8, bike: 4, cycle: 4, snake: 0 };
    Object.defineProperty(result, "octopus", {
      value: 16,
    });
    expect(map(input, (k, v) => [k, 2 * v])).toStrictEqual(result);

    Object.defineProperty(input, "heavy-tiger", {
      value: 30,
    });
    Object.defineProperty(result, "heavy-tiger", {
      value: 60,
    });
    expect(map(input, (k, v) => [k, 2 * v])).toStrictEqual(result);
  });
});

describe("filter function to filter object on the basis of key or value", () => {
  test("should correctly call the provided callback function and return a filtered object", () => {
    const input = { car: 4, bike: 2, cycle: 2, snake: 0 };
    Object.defineProperty(input, "octopus", {
      value: 8,
    });
    const result = {};
    Object.defineProperty(result, "octopus", {
      value: 8,
    });
    expect(filter(input, (k, v) => v === 8)).toStrictEqual(result);
  });
});

describe("Invert function to invert the key value pairs inside the given object", () => {
  test("should correctly invert the key value pairs inside object object", () => {
    const input = { car: 4, bike: 2, cycle: 3, snake: 0 };
    Object.defineProperty(input, "octopus", {
      value: 8,
    });
    const result = { 4: 'car', 2: 'bike', 3: 'cycle', 0: 'snake' };
    Object.defineProperty(result, 8, {
      value: 'octopus',
    });
    expect(invert(input)).toStrictEqual(result);
  });
});

describe("Merge function to merge all the input objects into one ", () => {
  test("should correctly merge objects", () => {
    expect(
      merge({ car: 4, bike: 2, cycle: 3 }, { snake: 9, octopus: 8 })
    ).toStrictEqual({ car: 4, bike: 2, cycle: 3, snake: 9, octopus: 8 });
  });
});

describe("All function to check if all the key or value of an object pass the criteria  ", () => {
  test("should correctly apply the callback on all the key or values", () => {
    expect(all({ car: 4, bike: 2, cycle: 3 }, (k, v) => v < 5)).toBe(true);
  });
});

describe("Some function to check some or all the key or value of an object pass the criteria  ", () => {
  test("should correctly apply the callback on all the key or values", () => {
    expect(some({ car: 4, bike: 2, cycle: 3 }, (k, v) => v === 2)).toBe(true);
    expect(some({ car: 4, bike: 2, cycle: 3 }, (k, v) => k.length === 3)).toBe(
      true
    );
  });
});
