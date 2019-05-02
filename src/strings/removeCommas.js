import { replace } from "./replace";

/**
 * @param {String} s
 * @return {String}
 */
const removeCommas = s => replace (/,/gi) (s) ("");

export { removeCommas };
