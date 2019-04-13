/**
 * Reduces N amount of fns over some value of x.
 *
 * @param {Function[]} fns Each fn must have an arity of 1
 * @return {function(*): *} Supplied arg `x` reduced over each fn * of fns.
 */
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

export { pipe };
