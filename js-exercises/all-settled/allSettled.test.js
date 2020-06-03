/* eslint-disable quotes */
import { allSettled } from "./allSettled";

describe("Function allSettled to check the status of promises", () => {
  test("Print the status of all the promises", () => {
    const result = [
      { status: "fulfilled", value: 33 },
      { status: "fulfilled", value: 66 },
      { status: "fulfilled", value: 99 },
      { status: "rejected", reason: "an error" },
    ];
    allSettled([
      Promise.resolve(33),
      new Promise((resolve) => setTimeout(() => resolve(66), 0)),
      Promise.reject(new Error("an error")),
    ]).then((expected) => {
      expect(expected).toStrictEqual(result);
    });
  });
});
