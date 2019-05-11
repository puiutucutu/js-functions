import { reduce } from "../reduce";
import { includes } from "../includes";

/**
 * uniq :: [a] -> [a]
 *
 * @param {*[]} xs
 * @return {*[]}
 */
const uniq = xs =>
  reduce
    (uniques => x => (includes (x) (uniques) ? uniques : [...uniques, x]))
    ([])
    (xs)
;

export { uniq }
