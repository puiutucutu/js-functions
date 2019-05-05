import { getObjectType } from "./getObjectType";

/**
 * @param {*} arr
 * @return {Boolean}
 */
const isArray = arr => getObjectType(arr) === "[object Array]";

export { isArray };
