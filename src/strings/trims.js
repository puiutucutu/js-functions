import { trim } from "./trim";
import { map } from "./map";

/**
 * @param {String[]} toTrim
 * @return {String[]}
 */
const trims = toTrim => map(trim)(toTrim);

export { trims };
