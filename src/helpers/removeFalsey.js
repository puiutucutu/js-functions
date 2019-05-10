import { filter } from "../list/native/filter";

const removeFalsey(xs) => filter (x => !!x) (xs);

export { removeFalsey };
