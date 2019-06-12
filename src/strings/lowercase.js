/**
 * lowercase :: String -> String
 *
 * @param {String} s
 * @return {String}
 */
const lowercase = s => String.prototype.toLowerCase.call(s);

export { lowercase };
