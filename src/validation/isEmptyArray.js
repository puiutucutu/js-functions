import { isArray } from "../validation/isArray";
import { toString } from "../helpers/toString";

const isEmptyArray = xs => !!(isArray (xs) && toString (xs) === "");

export { isEmptyArray };
