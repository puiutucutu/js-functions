import { filter } from "../list/native/filter";
import { identity } from "../primitive";

/**
 * @param {String[]} n
 * @return {T[]}
 */
const removeFalseyStrings = n => filter (identity) (n);

export { removeFalseyStrings };
