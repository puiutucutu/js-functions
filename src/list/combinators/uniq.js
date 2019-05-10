import { reduce } from "../native/reduce";
import { includes } from "../includes";

/**
 * uniq :: [a] -> [a]
 *
 * @param {T[]} xs
 * @return {T[]}
 */
const uniq = xs =>
  reduce
    (uniques => x => (includes (x) (uniques) ? uniques : [...uniques, x]))
    ([])
    (xs)
;

export { uniq }
