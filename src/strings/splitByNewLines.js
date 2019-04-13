import { splitByDelimiter } from "./splitByDelimiter";

/**
 * @param {String} text
 * @return {String[]}
 */
const splitByNewLines = text => splitByDelimiter(/\r\n|\n/g)(text);

export { splitByNewLines}