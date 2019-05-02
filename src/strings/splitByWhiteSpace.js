import { splitBy } from "./splitBy";

/**
 * @param {String} s
 * @return {String[]}
 */
const splitByWhiteSpace = s => splitByDelimiter (/\s/g) (s);

export { splitByWhiteSpace };
