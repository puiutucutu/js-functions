import { pipe } from "./pipe";

/**
 * Applies a list of functions over a list. Each function must be unary and take a list as the parameter.
 *
 * applyMany :: ((a -> b), (b -> c), ...(y -> z)) -> [a] -> [z]
 *
 * @param {...Function} fns
 * @return {function(x: U[]): (T[]}
 */
const applyMany = (...fns) => xs => pipe (...fns) (xs);

export { applyMany };
