/**
 * Abstract generic text splitting function.
 *
 * @param {String|RegExp} delimiter
 * @return {function(text: String): String[]}
 */
const splitByDelimiter = delimiter => text => text.split(delimiter);
