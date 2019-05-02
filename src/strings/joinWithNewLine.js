import { join } from "./join";

/**
 * @param {String[]|Number[]} n
 * @return {String}
 */
const joinWithNewLine = n => join ("\r\n") (n)

export { joinWithNewLine };
