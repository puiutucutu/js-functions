import { apply } from "../apply";
import { uncurryThree } from "../uncurryThree";

const mapNondeclarative = f => xs => Array.prototype.map.call(xs, apply(f));

const mapUncurriedManually = f => xs => Array.prototype.map.call(
  xs,
  (currentValue, index, array) => f (currentValue) (index) (array)
);

/**
 * map :: (a -> b) -> [a] -> [b]
 *
 * @param {function(a): b} f {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Syntax}
 * @return {function(xs: a[]): b[]}
 */
const map = f => xs => Array.prototype.map.call(
  xs,
  uncurryThree(f)
);

/*

const doubled = nums =>
  map
    (currentValue => currIndex => original => currentValue * 2)
    (nums)
;

const doubledConcise = nums =>
  map
    (x => i => xs => x * 2)
    (nums)
;

const nums = [1,2,3];
const doubledNums = doubled(nums); //=> [2,4,6]

*/

export { map };
