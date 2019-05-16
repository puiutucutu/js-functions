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
    (acc => s => s in acc ? { ...acc, [s]: acc[s] + 1 } : { ...acc, [s]: 1 })
    ({})
    (xs)
;

export { countUniques };
