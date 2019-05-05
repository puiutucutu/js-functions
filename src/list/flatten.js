import { foldl } from "./native/foldl";
import { concat } from './concat'


const flatten = (xs) => xs.reduce((a, b) => a.concat(b), [])
// const flatten = xs => foldl (concat) ([]) (xs);


export { flatten };
