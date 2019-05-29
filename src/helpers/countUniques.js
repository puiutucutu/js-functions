import { reduce } from "../list";

/**
 * Takes a 1-d array of strings or numbers and creates an object with unique
 * values as the key names and the frequency count of each as the key value.
 *
 * Example
 *
 * {
 *   key: "John Smith"
 *   value: 3
 * }
 *
 * @param {String[]|Number[]} xs
 */
const countUniques = xs =>
  reduce
    (acc => x => x in acc ? { ...acc, [x]: acc[x] + 1 } : { ...acc, [x]: 1 })
    ({})
    (xs)
;

export { countUniques };
