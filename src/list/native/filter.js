/**
 * @param {function(T): boolean} predicate
 * @signature (a -> Bool)) -> [a] -> [a]
 * @return {function(T[]): T[]}
 */
const filter = predicate => xs => Array.prototype.filter.bind (xs) (predicate);

export { filter };
