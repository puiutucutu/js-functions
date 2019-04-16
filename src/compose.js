/**
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 */
const compose = (f, g) => x => f(g(x));

export { compose };
