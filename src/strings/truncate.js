import { splitByWhiteSpace } from "./splitByWhiteSpace";
import { join } from "./join";
import { head, splitAt } from "../list";

const truncate = numberOfWords => s =>
  join (" ") (head( splitAt (numberOfWords) (splitByWhiteSpace(s))));

export { truncate };
