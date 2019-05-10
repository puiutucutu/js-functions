import { clone } from "./clone";

/**
 * reverse :: [a] -> [a]
 *
 * @param {*[]} xs
 * @return {*[]}
 */
const reverse = xs => Array.prototype.reverse.call(clone(xs));

export { reverse };
