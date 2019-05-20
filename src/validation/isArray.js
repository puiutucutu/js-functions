import { getObjectType } from "./getObjectType";

/**
 * @param {*} arr
 * @return {Boolean}
 */
const isArray = arr =>
  !!Array.isArray
    ? Array.isArray(arr)
    : getObjectType(arr) === "[object Array]"
;

export { isArray };
