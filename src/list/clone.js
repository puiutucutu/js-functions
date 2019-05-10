/**
 * clone :: [a] -> [a]
 *
 * @param {*[]} xs
 * @return {*[]}
 */
const clone = xs => Array.prototype.slice.call(xs, 0);

export { clone };
