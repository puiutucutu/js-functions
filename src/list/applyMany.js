import { pipe } from "./pipe";

/**
 * Applies a list of functions over a list.
 *
 * @param {...Function} fns
 * @return {function(x: U[]): (T[]}
 */
const applyMany = (...fns) => xs => pipe (...fns) (xs);

export { applyMany };
