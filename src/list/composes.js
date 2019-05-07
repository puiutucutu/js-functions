import { reduceRight } from './native'

const composeWithCurriedReduceRight = (...fns) => x =>
  reduceRight
  ((acc) => f => f(acc))
  (x)
  (fns)
;

/**
 * composes :: ((z -> y), (x -> y), ... (b -> a)) -> z -> a
 *
 * @param {...Function} fns Each fn must have an arity of 1
 * @return {Function}
 */
const composes = (...fns) => x => fns.reduceRight((acc, f) => f(acc), x);

export { composes };
