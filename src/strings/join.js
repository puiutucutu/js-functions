/**
 * @param {String|RegExp} delimiter
 * @return {function(x: String|Number[]): String}
 */
const join = delimiter => x => Array.prototype.join.call(x, delimiter);

export { join }
