/**
 * @param {function(*): Boolean} predicate
 * @return {function([]): []}
 * @signature (a -> Bool) -> [a] -> [a]
 */
const filter = predicate => xs => Array.prototype.filter.bind (xs) (predicate);

export { filter };
