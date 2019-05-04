/**
 * reduce :: (a, b) => (a) => (b[]) -> a[]
 *
 * @param {function(accumulator: T, currentValue: U)} reducer
 * @return {function(initialValue: T): function(items: U[]): (T|*)}
 */
const reduce = reducer => initialValue => items =>
  Array.prototype.reduce.call(items, reducer, initialValue);

export { reduce };
