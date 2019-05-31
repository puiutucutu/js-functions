import { includes, reduce } from "../list";
import { getKeys } from "./getKeys";

/**
 * Returns an object without the supplied keys.
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
  ({})
  (getKeys (obj));

export { omit };
