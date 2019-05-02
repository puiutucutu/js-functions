/**
 * @param {String|RegExp} delimiter
 * @return {function(s: String[]|Number[]): String}
 */
const join = delimiter => arr => Array.prototype.join.call(arr, delimiter);

export { join }
