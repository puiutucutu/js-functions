/**
 * Abstract generic text splitting function.
 *
 * @param {String|RegExp} delimiter
 * @return {function(text: String[]): String}
 */
const joinWith = delimiter => items => items.join(delimiter);

export { joinWith };
