import { getObjectType } from "./getObjectType";

/**
 * @param {*[]} arr
 * @return {Boolean}
 */
function isArray(arr) {
  return getObjectType(arr) === "[object Array]";
}

export { isArray };
