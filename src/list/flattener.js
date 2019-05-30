import { isArray } from "../validation/isArray";
import { reduce } from './reduce'

/**
 * Recursively flattens an array of items of varying arities into an array
 * with an arity of one.
 *
 * @param {Array} xs
 * @return {Array} The array of arrays reduced to a 1-d array
 */
const flattener = xs =>
  reduce
    ((acc) => (el) => (isArray(el) ? [...acc, ...flattener(el)] : [...acc, el]))
    ([])
    (xs)
;

export { flattener };
