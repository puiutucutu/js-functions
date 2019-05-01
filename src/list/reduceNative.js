/**
 * @param {function(acc: *, cur: *, idx: number, src: *[])} reducer
 * @return {function(items: *[]): function(initialValue: T): (T | *)}
 */
const reduceNative = reducer => items => initialValue =>
  Array.prototype.reduce.call(items, reducer, initialValue);

export { reduceNative };
