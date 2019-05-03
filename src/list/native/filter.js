/**
 * @param {function(currentValue: *): Boolean} predicate
 * @return {function(items: T[]): T[]}
 */
const filter = predicate => items => items.filter(predicate);

export { filter };
