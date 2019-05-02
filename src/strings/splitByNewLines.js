import { splitBy } from "./splitBy";

/**
 * @param {String} s
 * @return {String[]}
 */
const splitByNewLines = s => splitBy (/\r\n|\n/g) (s);

export { splitByNewLines };
