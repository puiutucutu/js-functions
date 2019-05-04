import { uncurry } from "../uncurry";

/**
 * reduce :: (a, b) => (a) => (b[]) -> a[]
 *
 * @param {function(accumulator: T, currentValue: U)} f
 * @return {function(initialValue: T): function(items: U[]): (T|*)}
 */
const reduce = f => y => xs => Array.prototype.reduce.call(
  xs,
  uncurry(f),
  y
);

export { reduce };
