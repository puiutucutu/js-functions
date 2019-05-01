import { map } from "../map";

/**
 * @param {T} initial
 * @return {function(*): function(items: U[]): T}
 */
const reduce = initial => reducer => items => {
  let acc = initial;
  const len = items.length;
  for (let i = 0; i < len; i++) {
    acc = reducer(acc, items[i], i, items);
  }

  return acc;
};

export { reduce };
