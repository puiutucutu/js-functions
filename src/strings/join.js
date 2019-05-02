/**
 * @param {String|RegExp} delimiter
 * @return {function(x: String|Number[]): String}
 */
const join = delimiter => s => Array.prototype.join.call(s, delimiter);

export { join }
