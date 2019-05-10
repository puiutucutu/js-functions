import { reduce } from "../native/reduce";
import { includes } from "../includes";

const uniq = xs =>
  reduce
    (uniques => x => (includes (x) (uniques) ? uniques : [...uniques, x]))
    ([])
    (xs) 
;

export { uniq }
