/**
 * Reduces N functions over some value of `x`.
 *
 * @param {...Function} fns Each fn must have an arity of 1
 * @return {function(U): T} Some value `x` reduced over each fn of fns
 */
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export { pipe };
