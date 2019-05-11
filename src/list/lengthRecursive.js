import { isArray } from "../helpers/isArray";

const toString = x => x.toString();

/**
 * @param {*[]} xs
 * @return {Number}
 */
function lengthRecursive(xs) {
  const [head, ...tail] = xs;

  return isArray(xs) && toString(xs) === ""
    ? 0
    : 1 + lengthRecursive(tail);
}

export { lengthRecursive };
