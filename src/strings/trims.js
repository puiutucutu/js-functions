import { trim } from "./trim";
import { map } from "../list/map";

/**
 * trims :: [String] -> [String]
 *
 * @param {String[]} xs
 * @return {String[]}
 */
const trims = xs => map (trim) (xs);

export { trims };
