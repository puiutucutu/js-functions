import { filter } from "../list/filter";
import { identity } from "../primitive";

/**
 * @param {String[]} n
 * @return {T[]}
 */
const removeFalseyStrings = n => filter (x => !!identity(x)) (n);

export { removeFalseyStrings };
