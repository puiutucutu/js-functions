import { reduce } from "../list";
import { createMap } from "../object";

const map = createMap();

/**
 * Takes a 1-d array of strings or numbers and creates an object with unique
 * values as the key names and the frequency as the key value.
 *
 * Example
 *
 * ```js
 * {
 *   key: "John Smith"
 *   value: 3
 * }
 * ```
 *
 * @param {String[]|Number[]} xs
 * @return {Object}
 * @example
 *
 * countUniques (["bmw", "mercedes", "bmw", "volkswagen", "bmw", "porsche"]));
 * //=> { bmw: 3, mercedes: 1, volkswagen: 1, porsche: 1 }
 *
 */
const countUniques = xs =>
  reduce
    (
      acc => x => x in acc
        ? { ...acc, [x]: acc[x] + 1 }
        : { ...acc, [x]: 1 }
    )
    (map)
    (xs)
;

export { countUniques };
