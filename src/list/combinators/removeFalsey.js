import { filter } from "../../list/filter";

const removeFalsey = xs => filter (x => !!x) (xs);

export { removeFalsey };
