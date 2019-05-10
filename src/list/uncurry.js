/**
 * @param {Function} f
 * @return {function(*, *): *}
 */
const uncurry = f => (a, b) => f (a) (b);

export { uncurry };
