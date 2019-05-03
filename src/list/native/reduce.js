/**
 * @param {function(acc: *, curr: *)} reducer
 * @return {function(T): function(items: []): (T|*)}
 */
const reduce = reducer => initialValue => items =>
  Array.prototype.reduce.call(items, reducer, initialValue);

export { reduce };
