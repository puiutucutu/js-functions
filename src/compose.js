/**
 * @param {Function} f
 * @param {Function} g
 * @return {function(*): *}
 */
const compose = (f, g) => x => f(g(x));

export { compose };
