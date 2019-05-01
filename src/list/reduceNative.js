/**
 * @param {*} initialValue
 * @return {function(acc: *, cur: *, idx: number, src: *[])} : function(items: T[]): T[]}
 */
const reduceNative = initialValue => reducer => items =>
  Array.prototype.reduce.call(items, reducer, initialValue);

export { reduceNative };
