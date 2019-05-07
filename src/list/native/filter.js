/**
 * @param {function(T): boolean} predicate
 * @return {function(T[]): T[]}
 * @signature (a -> Bool)) -> [a] -> [a]
 */
const filter = predicate => xs => {
  return Array.prototype.filter.bind(xs)(predicate);
};

export { filter };
