import { splitByWhiteSpace } from "./splitByWhiteSpace";
import { join } from "./join";
import { head, pipe, splitAt } from "../list";

/**
 * splitAt :: Number -> String -> String
 *
 * @param {Number} numberOfWords
 * @return {function(s: String): String}
 */
const truncate = numberOfWords => s =>
  pipe
  (
    splitByWhiteSpace,
    splitAt (numberOfWords),
    head,
    join (" ")
  )
  (s)
;

export { truncate };
