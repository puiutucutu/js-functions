import { join } from "./join";

/**
 * @param {String} delimiter
 * @return {function(n: String|Number[]): String}
 */
const joinWith = delimiter => n => join (delimiter) (n);

export { joinWith };
