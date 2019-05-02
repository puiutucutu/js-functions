/**
 * @param {function(*): *} f {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Syntax}
 * @return {function(x: A[]): B[]}
 */
const mapNative = f => x => Array.prototype.map.call(x, f);

export { mapNative };
