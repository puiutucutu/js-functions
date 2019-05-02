import { splitBy } from "./splitBy";

/**
 * @param {String} s
 * @return {String[]}
 */
const splitByWhiteSpace = s => splitBy (/\s/g) (s);

export { splitByWhiteSpace };
