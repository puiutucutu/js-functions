import { getObjectType } from "./getObjectType";

/**
 * @param {*} n
 * @return {Boolean}
 */
function isNumeric(n) {
  return getObjectType(n) === "[object Number]";
}

export { isNumeric };
