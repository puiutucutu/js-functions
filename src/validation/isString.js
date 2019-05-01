import { getObjectType } from "./getObjectType";

/**
 * @param {*} n
 * @return {Boolean}
 */
function isString(n) {
  return getObjectType(n) === "[object String]";
}

export { isString };
