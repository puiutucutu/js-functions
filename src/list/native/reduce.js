/**
 * @param {function(acc: T, curr: *)} reducer
 * @return {function(initialValue: T): function(items: []): (T|*)}
 */
const reduce = reducer => initialValue => items =>
  Array.prototype.reduce.call(items, reducer, initialValue);

export { reduce };
