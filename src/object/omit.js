import { includes, reduce } from "../list";
import { getKeys } from "./getKeys";
import { createMap } from './createMap'

const Map = createMap();

/**
 * Returns an object with the supplied keys removed.
 *
 * omit :: ([a]) -> ({a}) -> {a}
 *
 * @param {String[]|Number[]} keys
 * @return {function(obj: Object): (Object)}
 * @example
 *
 * const obj = {
 *   id: 123,
 *   brand: "bmw",
 *   model: "7 Series"
 * };
 *
 * omit (["id", "brand"]) (obj); //=> { model: "7 Series" }
 *
 */
const omit = keys => obj =>
  reduce
  (
    acc => k => includes (k) (keys)
      ? { ...acc }
      : { ...acc, [k]: obj[k] }
  )
  (Map)
  (getKeys (obj))
;

export { omit };
