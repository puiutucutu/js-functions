import { includes, reduce } from "../list";
import { keys } from "./keys";

/**
 * omit :: ([a]) -> ({a}) -> {a}
 *
 * @param {Array} ks
 * @return {function(o: Object): (Object)}
 */
const omit = ks => o =>
  reduce
  (
    acc => k => includes (k) (ks)
    ? { ...acc }
    : { ...acc, [k]: o[k] }
  )
  ({})
  (keys (o));

export { omit };
