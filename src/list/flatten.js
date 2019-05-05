import { foldl } from "./native/foldl";
import { concat } from './concat'

const flatten = xs => foldl (concat) ([]) (xs);

export { flatten };
