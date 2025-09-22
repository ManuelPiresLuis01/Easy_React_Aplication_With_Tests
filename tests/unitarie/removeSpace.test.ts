import removeSpaces from "../../src/utils/removeSpaces/removeSpaces";
import { describe, test, expect } from "vitest";

describe("removeSpaces function", () => {
  test("should remove leading and trailing spaces from a string", () => {
    expect(removeSpaces("  Hello World  ")).toBe("Hello World");
    expect(removeSpaces("NoSpaces")).toBe("NoSpaces");
    expect(removeSpaces("   LeadingSpace")).toBe("LeadingSpace");
    expect(removeSpaces("TrailingSpace   ")).toBe("TrailingSpace");
    expect(removeSpaces("   BothSides   ")).toBe("BothSides");
  });

  test("should return an empty string for null, undefined, or non-string inputs", () => {
    expect(removeSpaces(null)).toBe("");
    expect(removeSpaces(undefined)).toBe("");
    expect(removeSpaces(123)).toBe("");
    expect(removeSpaces({})).toBe("");
    expect(removeSpaces([])).toBe("");
  });
});
