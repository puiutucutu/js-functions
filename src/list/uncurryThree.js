/**
 * @param {Function} f
 * @return {function(*, *, *): *}
 */
const uncurryThree = f => (a, b, c) => f (a) (b) (c);

export { uncurryThree };
