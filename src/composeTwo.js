/**
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 */
const composeTwo = (f, g) => x => g(f(x));
