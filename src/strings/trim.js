/**
 * trim :: String -> String
 *
 * @param {String} s
 * @return {String}
 */
const trim = s => String.prototype.trim.call(s);

export { trim };
