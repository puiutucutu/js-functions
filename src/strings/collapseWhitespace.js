import { replace } from "./replace";

/**
 * Collapses whitespace characters, including new lines.
 *
 * @param {String} s
 * @return {String}
 */
const collapseWhitespace = s => replace(/\s+/gi) ("") (s);

export { collapseWhitespace };
