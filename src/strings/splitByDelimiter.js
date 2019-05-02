/**
 * Abstract generic text splitting function.
 *
 * @param {String|RegExp} delimiter
 * @return {function(s: String): String[]}
 */
const splitBy = delimiter => s => String.prototype.split.call(s, delimiter);

export { splitBy };
