/**
 * @param {function(currentValue: *): Boolean} predicate
 * @return {function(items: T[]): T[]}
 */
const filter = predicate => items => {
  return Array.prototype.filter.bind(items)(predicate);
};

export { filter };
