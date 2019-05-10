import { uncurryThree } from "../uncurryThree";

/**
 * map :: (a -> b) -> [a] -> [b]
 *
 * @param {function(a, index: Number, array: *[]): b} f {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Syntax}
 * @return {function(xs: a[]): b[]}
 */
const map = f => xs => Array.prototype.map.call(
  xs,
  uncurryThree(f) //=> (currentValue, index, originalArray) => f (currentValue) (index) (array)
);

export { map };
