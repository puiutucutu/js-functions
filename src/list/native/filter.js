/**
 * @param {function(currentValue: *): Boolean} predicate
 * @return {function(n: T[]): T[]}
 */
const filter = predicate => n => Array.prototype.filter.call(n, predicate);

export { filter };
