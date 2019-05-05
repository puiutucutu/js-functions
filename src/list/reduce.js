/**
 * @param {function(accumulator: T, currentValue: U)} reducer
 * @return {function(initialValue: T): function(items: U[]): (T|*)}
 */
import { getObjectType } from "../validation";

const reduce = reducer => initialValue => items => {
  if (getObjectType(items) !== "[object Array]") {
    throw new TypeError("`items` must be an array");
  }

  let accumulator = initialValue;

  const len = items.length;
  for (let i = 0; i < len; i++) {
    accumulator = reducer (accumulator) (items[i]);
  }

  return accumulator;
};

export { reduce };
