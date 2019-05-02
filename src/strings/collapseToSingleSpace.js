import { replace } from "./replace";

/**
 * @param {String} s
 * @return {String}
 */
const collapseToSingleSpace = s => replace(/\s+/gi) (" ") (s);

export { collapseToSingleSpace };
