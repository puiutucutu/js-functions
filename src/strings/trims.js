import { trim } from "./trim";
import { map } from "../list/map";

/**
 * @param {String[]} s
 * @return {String[]}
 */
const trims = s => map(trim)(s);

export { trims };
