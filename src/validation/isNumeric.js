import { getObjectType } from "./getObjectType";

/**
 * @param {*} x
 * @return {Boolean}
 */
function isNumeric(x) {
  return getObjectType(x) === "[object Number]";
}

export { isNumeric };

function isNumericAlternate(val) {
  return Number(parseFloat(val)) == val
}

// @todo investigate
const isNumerical = n => !isNaN(parseFloat(n)) && isFinite(n);
