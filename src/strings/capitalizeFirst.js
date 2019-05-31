import { concat, head, tail } from "../list";
import { join } from "./join";

const capitalizeFirst = x => !!x
  ? [x[0].toUpperCase()].concat(x.slice(1)).join("")
  : x
;

const toUpperCase = x => x.toUpperCase();
const capitalizeFirstFunctionally = x =>
  join ("") (concat (toUpperCase (head (x))) (tail(x)));

export { capitalizeFirst };
