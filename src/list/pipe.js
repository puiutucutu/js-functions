import { reduce } from "./native";

/**
 * Applies a list of functions to a single value.
 *
 * @param {...Function} fns Each fn must have an arity of 1
 * @return {function(U): T} Some value `x` reduced over each fn of fns
 */
const pipe = (...fns) => x => reduce
  (acc => f => f(acc))
  (x)
  (fns)
;

export { pipe };
