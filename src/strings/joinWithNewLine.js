import { join } from "./join";

/**
 * @param {String|Number[]} x
 * @return {String}
 */
const joinWithNewLine = x => join ("\r\n") (x)

export { joinWithNewLine };
