import { trim } from "./trim";
import { pipe } from "../pipe";
import { map } from "./map";

/**
 * @param {String[]}
 * @return {function(String[]): String[]}
 */
const trims = pipe(map(trim));

export { trims };
