import { reduce } from "./reduce";

/**
 * Applies a list of functions to a single value.
 *
 * Same implementation as using `Array.prototype.reduce`:
 *
 *    const pipe = (...fns) => fns.reduce((acc, f) => f(acc), x);
 *    const pipe = Array.prototype.reduce.call(fns, (acc, f) => f(acc), x);
 *
 * @param {...Function} fns Each fn must have an arity of 1
 * @return {function(U): T} Some value `x` reduced over each fn of fns
 * @signature pipe :: ([(a -> b), (b -> c), ...(y -> z)]) -> a -> z
 */
const pipe = (...fns) => x =>
  reduce
    (acc => f => f(acc))
    (x)
    (fns)
;

export { pipe };
