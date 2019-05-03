import { map } from "./map";

/**
 * @param {T} initial
 * @return {function(*): function(items: U[]): T}
 */
const reduce = initial => reducer => items => {
  let accumulator = initial;

  const len = items.length;
  for (let i = 0; i < len; i++) {
    accumulator = reducer(accumulator, items[i]);
  }

  return accumulator;
};

export { reduce };
