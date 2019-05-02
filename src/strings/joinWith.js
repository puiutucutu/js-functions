import { join } from "./join";

/**
 * @param {String} delimiter
 * @return {function(n: String|Number[]): String}
 */
const joinWith = delimiter => list => join (delimiter) (list);

export { joinWith };
