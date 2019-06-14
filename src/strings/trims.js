import { trim } from "./trim";
import { map } from "../list/map";

/**
 * trims :: [String] -> [String]
 *
 * @param {String[]} s
 * @return {String[]}
 */
const trims = s => map (trim) (s);

export { trims };
