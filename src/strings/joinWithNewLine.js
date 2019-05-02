import { join } from "./join";

/**
 * @param {String|Number[]} items
 * @return {String}
 */
const joinWithNewLine = list => join ("\r\n") (list)

export { joinWithNewLine };
