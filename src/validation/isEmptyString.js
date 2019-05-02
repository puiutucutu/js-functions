import { isString } from "./isString";

/**
 * @param {String} s
 * @return {Boolean}
 */
function isEmptyString(s) {
  if (!isString(s)) {
    throw new TypeError("Argument must be of type string");
  }
  
  return s === ""; 
}

export { isEmptyString }
