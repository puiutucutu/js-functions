import { includes, reduce } from "../list";
import { getKeys } from "./getKeys";

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
  (getKeys (o));

export { omit };
