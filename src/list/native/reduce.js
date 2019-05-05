import { uncurry } from "../uncurry";

/**
 * reduce :: (a, b) => (a) => (b[]) -> a[]
 *
 * @param {function(accumulator: T, currentValue: U)} f
 * @return {function(initialValue: T): function(xs: U[]): (T|*)}
 */
const reduce = f => accumulator => xs => Array.prototype.reduce.call
(
  xs,
  uncurry(f),
  accumulator
);

export { reduce };
