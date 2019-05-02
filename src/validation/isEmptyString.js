import { isString } from "./isString";

/**
 * @param {String} s
 * @return {Boolean}
 */
export const isEmptyString = s => isString(s) && s !== "";

export { isEmptyString }
