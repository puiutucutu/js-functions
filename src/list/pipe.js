import { reduce } from "./native";

/**
 * Applies a list of functions to a single value.
 *
 * @param {...Function} fns Each fn must have an arity of 1
 * @return {function(U): T} Some value `x` reduced over each fn of fns
 * @signature pipe :: ([(a -> b), (b -> c), ...(y -> z)]) -> a -> z
 */
const pipe = (...fns) => x => reduce
  (acc => f => f(acc))
  (x)
  (fns)
;

export { pipe };
