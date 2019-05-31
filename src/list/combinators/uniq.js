import { reduce } from "../reduce";
import { includes } from "../includes";

/**
 * uniq :: [a] -> [a]
 *
 * @param {T[]} xs
 * @return {T[]}
 * @example
 *
 * uniq ([1, 1, 1, 2, 3]); // => [1, 2, 3]
 *
 */
const uniq = xs =>
  reduce
    (uniques => x => (includes (x) (uniques) ? uniques : [...uniques, x]))
    ([])
    (xs)
;

export { uniq }