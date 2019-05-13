import { isArray } from "../helpers/isArray";
import { tail } from "./tail";

const toString = x => x.toString();

/**
 * @param {*[]} xs
 * @return {Number}
 */
const lengthRecursive = xs => {
  if (!isArray(xs)) {
    throw new TypeError("Argument for `xs` must be of type array");
  }

  return toString(xs) === "" ? 0 : 1 + lengthRecursive(tail(xs));
};

export { lengthRecursive };
