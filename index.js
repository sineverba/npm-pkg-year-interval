"use strict";

/**
 *
 * @param {*} startYear
 */
const getYearInterval = (startYear) => {
  if (!startYear) {
    throw new Error("Missing startYear");
  }
  const currentYear = new Date().getFullYear();
  if (currentYear > startYear) {
    return `${startYear} - ${currentYear}`;
  }
  return startYear;
};

module.exports = getYearInterval;
