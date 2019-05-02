import { getObjectType } from "./getObjectType";

/**
 * @param {*} n
 * @return {Boolean}
 */
function isNumeric(n) {
  return getObjectType(n) === "[object Number]";
}

function isNumericAlternate(val) {
  return Number(parseFloat(val)) == val
}

// @todo investigate
const isNumerical = n => !isNaN(parseFloat(n)) && isFinite(n);

export { isNumeric };
