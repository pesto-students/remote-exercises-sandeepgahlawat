/* eslint-disable quotes */
import { reverse, equal } from "./betterStringLib";

describe("reverse function to reverse strings with no-ascii characters", () => {
  test("Reverse a string without ascii characters", () => {
    const expected = reverse("sandeep");
    const result = "peednas";
    expect(expected).toBe(result);
  });

  test("Reverse a string with ascii characters", () => {
    const expected = reverse("foo 𝌆 bar mañana mañana");
    const result = "anañam anañam rab 𝌆 oof";
    expect(expected).toBe(result);
  });

  test("Reverse a string with emoji", () => {
    const expected = reverse("foo 𝌆 bar mañana mañana 😁");
    const result = "😁 anañam anañam rab 𝌆 oof";
    expect(expected).toBe(result);
  });
});

describe("Equal function check if two strings are equal with non ascii characters in consideration", () => {
  test("Check ascii strings", () => {
    const expected = equal("sandeep", "sandeep");
    expect(expected).toBe(true);
  });

  test("Check non-ascii strings", () => {
    const expected = equal("Designhåndbog", "Designhåndbog");
    expect(expected).toBe(false);
  });
});
