/**
 * @param {function(acc: T, curr: U)} reducer
 * @return {function(initialValue: T): function(items: U[]): (T|*)}
 */
const reduce = reducer => initialValue => items =>
  Array.prototype.reduce.call(items, reducer, initialValue);

export { reduce };
