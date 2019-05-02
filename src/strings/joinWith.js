import { join } from "./join";

/**
 * Abstract generic text splitting function.
 *
 * @param {String} delimiter
 * @return {function(text: String[]): String}
 */
const joinWith = delimiter => items => join (delimiter) (items);

export { joinWith };
