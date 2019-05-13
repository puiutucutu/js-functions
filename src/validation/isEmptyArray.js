import { isArray } from "./isArray";
import { toString } from "../helpers/toString";

const isEmptyArray = xs => !!(isArray(xs) && toString(xs) === "");

export { isEmptyArray };
