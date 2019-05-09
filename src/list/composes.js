import { reduceRight } from './native'

/**
 * composes :: ((z -> y), (x -> y), ... (b -> a)) -> z -> a
 *
 * @param {...Function} fns Each fn must have an arity of 1
 * @return {Function}
 */
const composes = (...fns) => x =>
  reduceRight
  ((acc) => f => f(acc))
  (x)
  (fns)
;

export { composes };
