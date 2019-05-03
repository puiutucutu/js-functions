/**
 * @param {function(acc: T, curr: U)} reducer
 * @return {function(initialValue: T): function(items: U[]): (T|*)}
 */
const reduce = reducer => initial => items => {
  let accumulator = initial;

  const len = items.length;
  for (let i = 0; i < len; i++) {
    accumulator = reducer(accumulator, items[i]);
  }

  return accumulator;
};

export { reduce };
