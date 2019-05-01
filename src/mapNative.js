/**
 * @param {function(*): *} f
 * @return {function(x: *[]): *[]}
 */
const mapNative = f => x => Array.prototype.map.call(x, f);

export { mapNative };
