import { splitBy } from "./splitBy";

/**
 * @param {String} s
 * @return {String[]}
 */
const splitByComma = s => splitBy (/,/g) (s);

export { splitByComma };
