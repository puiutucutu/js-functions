import { getObjectType } from "./getObjectType";

/**
 * @param {*} s
 * @return {Boolean}
 */
function isString(s) {
  return getObjectType(s) === "[object String]";
}

export { isString };
