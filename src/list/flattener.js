import { isArray } from "../validation/isArray";

/**
 * Recursively flattens an array of items of varying arities into an array
 * with an arity of one.
 *
 * @param {Array} items
 * @return {Array} The array of arrays reduced to a 1-d array
 */
const flattener = items =>
  items.reduce(
    (acc, el) => (isArray(el) ? [...acc, ...flattener(el)] : [...acc, el]),
    []
  );

export { flattener };
