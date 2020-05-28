/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
import { map, filter, invert, merge, all, some } from "./objectUtils";

// write your own test cases

describe("map function to transform key value pairs on an object", () => {
  test("should correctly call the provided callback function", () => {
    expect(
      map({ car: 4, bike: 2, cycle: 2, snake: 0, octopus: 8 }, (k, v) => [
        k,
        2 * v,
      ])
    ).toStrictEqual({ car: 8, bike: 4, cycle: 4, snake: 0, octopus: 16 });

    expect(
      map({ car: 4, bike: 2, cycle: 2, snake: 0, octopus: 8 }, (k, v) => [
        k.toUpperCase(),
        2 * v,
      ])
    ).toStrictEqual({ CAR: 8, BIKE: 4, CYCLE: 4, SNAKE: 0, OCTOPUS: 16 });
  });
});

describe("filter function to filter object on the basis of key or value", () => {
  test("should correctly call the provided callback function and return a filtered object", () => {
    expect(
      filter(
        { car: 4, bike: 2, cycle: 2, snake: 0, octopus: 8 },
        (k, v) => k.length < 5
      )
    ).toStrictEqual({ car: 4, bike: 2 });

    expect(
      filter(
        { car: 4, bike: 2, cycle: 2, snake: 9, octopus: 8 },
        (k, v) => v % 2 === 0
      )
    ).toStrictEqual({ car: 4, bike: 2, cycle: 2, octopus: 8 });
  });
});

describe("Invert function to invert the key value pairs inside the given object", () => {
  test("should correctly invert the key value pairs inside object object", () => {
    expect(invert({ car: 4, bike: 2, cycle: 3 })).toStrictEqual({
      4: "car",
      2: "bike",
      3: "cycle",
    });

    expect(invert({ snake: 9, octopus: 8 })).toStrictEqual({
      9: "snake",
      8: "octopus",
    });
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
    expect(
      some({ car: 4, bike: 2, cycle: 3 }, (k, v) => k.length === 3)
    ).toBe(true);
  });
});
