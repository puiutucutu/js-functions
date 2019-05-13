import { lengthRecursive as length } from "./lengthRecursive";
import { head } from "./head";
import { tail } from "./tail";

const sum = xs => (length (xs) === 0 ? 0 : head (xs) + sum (tail (xs)));

export { sum };
