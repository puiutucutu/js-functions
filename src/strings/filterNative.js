/**
 * @param predicate
 * @return {function(n: T[]): T[]}
 */
const filterNative = predicate => n =>
  Array.prototype.filter.call(n, predicate);

export { filterNative };
