import { uncurry } from "./uncurry";

/**
 * reduce :: ((a -> b) -> a) -> a -> [b] -> a
 *
 * @param {function(accumulator: T): function(currentValue: U)} reducer
 * @return {function(accumulatorInitialValue: T): function(xs: U[]): (T|*)}
 * @example
 *
 * reduce
 *   (acc => curr => acc + curr)
 *   (0)
 *   ([1, 2, 3, 4])
 * ;
 *
 * //=> 10
 *
 */
const reduce = reducer => accumulatorInitialValue => xs => Array.prototype.reduce.call
(
  xs,
  uncurry (reducer), //=> reducer (accumulator, currentValue)
  accumulatorInitialValue
);

export { reduce };
