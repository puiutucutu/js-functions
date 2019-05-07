import { uncurry } from "../uncurry";

/**
 * reduce :: ((a -> b) -> a) -> a -> [b] -> a
 *
 * @param {function(accumulatorInitialValue: T, currentValue: U)} reducer
 * @return {function(initialValue: T): function(xs: U[]): (T|*)}
 */
const reduceRight = reducer => accumulatorInitialValue => xs => Array.prototype.reduceRight.call
(
  xs,
  uncurry(reducer),
  accumulatorInitialValue
);

export { reduceRight };
