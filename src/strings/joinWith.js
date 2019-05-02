import { join } from "./join";

/**
 * @param {String} delimiter
 * @return {function(n: String|Number[]): String}
 */
const joinWith = delimiter => ss => join (delimiter) (ss);

export { joinWith };
