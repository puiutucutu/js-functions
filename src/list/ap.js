/**
 * Applies a list of functions to a list of values.
 *
 * @param fns
 * @return {function(x: *[]): *[]}
 */
const ap = (...fns) => x =>
  Array.prototype.reduce.call(fns, (acc, f) => acc.map(f), x);

const apAlt = (...fns) => x => fns.reduce((acc, f) => acc.map(f), x);

export { ap };
