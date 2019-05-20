import { isArray } from "../validation/isArray";
import { tail } from './tail'

const toString = x => x.toString();

/**
 * @param {*[]} xs
 * @return {Number}
 */
function lengthRecursive(xs) {
  if (!isArray (xs)) {
    throw new TypeError("Argument `xs` must be of type array")
  }

  const [, ...tail] = xs;
  return toString(xs) === "" ? 0: lengthRecursive(tail) + 1;
}

export { lengthRecursive };

// // map :: (a->b) -> [a] -> [b]
// const map = f => xs => {
//   const [h,...t] = xs;
//   return (xs).length === 0 ? [] : [f(h), ...map(f)(t)]
// }
//
// const addsOne = x => x + 1;
// const nums = [1,2,3];
//
// console.log(
//   map(addsOne)(nums)
// )
//
//
//
// const isArray = x => Array.isArray(x);
// const toString = x => x.toString();
//
// /**
//  * @param head
//  * @param tail
//  * @return {number}
//  */
// const lengthRecursive = ([head, ...tail]) =>
//   isArray(tail) && toString(tail) === "" ? 1 : 1 + lengthRecursive(tail)
//
//
// console.log(
//   lengthRecursive([1,2])
// )