import { splitByDelimiter } from "./splitByDelimiter";

/**
 * @param {String} text
 * @return {String[]}
 */
const splitByWhiteSpace = text => splitByDelimiter(/\s/g)(text);

export { splitByWhiteSpace };
