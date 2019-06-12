import { splitByWhiteSpace } from "./splitByWhiteSpace";
import { join } from "./join";
import { head, splitAt } from "../list";

const truncate = numberOfWords => s =>
  join (" ") (head( splitAt (3) (splitByWhiteSpace(s))));

export { truncate };
