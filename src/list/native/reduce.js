import { uncurry } from "../uncurry";

/**
 * reduce :: ((a -> b) -> a) -> a -> [b] -> a
 *
 * @param {function(accumulator: T, currentValue: U)} reducer
 * @return {function(initialValue: T): function(xs: U[]): (T|*)}
 */
const reduce = reducer => accumulator => xs => Array.prototype.reduce.call
(
  xs,
  uncurry(reducer),
  accumulator
);

export { reduce };
