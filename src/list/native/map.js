import { apply } from "../apply";

/**
 * @param {function(a): b} f {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Syntax}
 * @return {function(xs: a[]): b[]}
 */
const map = f => xs => Array.prototype.map.call(xs, apply(f));

export { map };
