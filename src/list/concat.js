/**
 * concat :: [a] -> a -> [a]
 *
 * @param {T[]} xs
 * @return {function(T): T[]}
 */
const concat = xs => x => Array.prototype.concat(xs, x);

export { concat };
