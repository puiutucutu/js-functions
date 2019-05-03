/**
 * @param {function(T): boolean} predicate
 * @return {function(T[]): T[]}
 */
const filter = predicate => items => {
  return Array.prototype.filter.bind(items)(predicate);
};

export { filter };
