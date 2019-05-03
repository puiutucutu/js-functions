/**
 * @param {function(acc: T, curr: *)} reducer
 * @return {function(init: T): function(items: []): (T|*)}
 */
const reduce = reducer => init => items =>
  Array.prototype.reduce.call(items, reducer, init);

export { reduce };
