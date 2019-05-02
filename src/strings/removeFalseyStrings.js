import { filterNative } from "./filterNative";

/**
 * @param {String[]} n
 * @return {T[]}
 */
const removeFalseyStrings = n => filterNative(el => !!el)(n);

export { removeFalseyStrings };
