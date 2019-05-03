/**
 * @param {function(*): *} f {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Syntax}
 * @return {function(x: a[]): b[]}
 */
const map = f => x => Array.prototype.map.call(x, f);

export { map };

