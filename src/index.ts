/**
 *
 * @param {*} startYear
 */
export const GetYearInterval = (startYear: number) => {
  if (!startYear) {
    throw new Error("Missing startYear");
  }
  const currentYear = new Date().getFullYear();
  if (currentYear > startYear) {
    return `${startYear} - ${currentYear}`;
  }
  return startYear;
};
