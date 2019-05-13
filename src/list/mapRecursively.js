import { lengthRecursive as length } from "./lengthRecursive";
import { head } from "./head";
import { tail } from "./tail";

// map :: (a->b) -> [a] -> [b]
const map = f => xs =>
  length(xs) === 0
    ? []
    : [f(head(xs)), ...map(f)(tail(xs))]
  ;

export { map as mapRecursively };
