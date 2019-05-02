/**
 * @param {String} str
 * @return {String}
 */
const trim = s => String.prototype.trim.call(s);

export { trim };
