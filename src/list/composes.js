/**
 * @param {...Function} fns Each fn must have an arity of 1
 * @return {Function}
 */
const composes = (...fns) => x => fns.reduceRight((acc, f) => f(acc), x);

export { composes };
