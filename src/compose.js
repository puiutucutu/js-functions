/**
 * @param {Function[]} fns Each fn must have an arity of 1
 * @return {Function}
 */
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
