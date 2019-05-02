import { replace } from "./replace";

/**
 * @param {String} s
 * @return {String}
 */
const collapseWhitespace = s => replace(/\s+/gi) ("") (s);

export { collapseWhitespace };
