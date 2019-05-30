import { includes, reduce } from "../list";
import { getKeys } from "./getKeys";

/**
 * omit :: ([a]) -> ({a}) -> {a}
 *
 * @param {Array} keys
 * @return {function(o: Object): (Object)}
 */
const omit = keys => o =>
  reduce
  (
    acc => k => includes (k) (keys)
    ? { ...acc }
    : { ...acc, [k]: o[k] }
  )
  ({})
  (getKeys (o));

export { omit };