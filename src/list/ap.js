import { reduce } from "./native/reduce";
import { map } from "./native/map";

const apNatively = (...fns) => x => fns.reduce((acc, f) => acc.map(f), x);

/**
 * Applies a list of functions to a list of values.
 *
 * @param {...Function} fns
 * @return {function(x: U[]): (T[]}
 */
const ap = (...fns) => x => reduce
  ((acc, f) => map (f) (acc))
  (x)
  (fns)
;

export { ap };
