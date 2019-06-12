import { splitByWhiteSpace } from "./splitByWhiteSpace";
import { join } from "./join";
import { head, pipe, splitAt } from "../list";

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
