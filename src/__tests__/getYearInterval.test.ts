import { GetYearInterval } from "../index";

describe("Test getYearInterval", function () {
  /**
   * Return "2020" (if we are currently in 2020)
   */
  it("Should return only current year", function () {
    const currentYear = new Date().getFullYear();
    const result = GetYearInterval(currentYear);
    expect(result).toBe(currentYear);
  });

  it("Should return two years", function () {
    const startYear = 2010;
    const currentYear = new Date().getFullYear();
    const result = GetYearInterval(startYear);
    expect(result).toBe(`2010 - ${currentYear}`);
  });

  it("Should throw error", function () {
    // @ts-expect-error
    expect(() => GetYearInterval()).toThrow(Error);
  });
});
