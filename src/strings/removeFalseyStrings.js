import { filterNative } from "../list/filterNative";
import { identity } from '../primitive'

/**
 * @param {String[]} n
 * @return {T[]}
 */
const removeFalseyStrings = n => filterNative(identity)(n);

export { removeFalseyStrings };
