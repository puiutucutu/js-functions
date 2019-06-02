import { reduce } from "../list";
import { createMap } from './createMap'

const Map = createMap();

/**
 * Returns an object with the supplied keys.
 *
 * pick :: ([a]) -> ({a}) -> {a}
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
 * pick (["id", "brand"]) (obj); //=> { id: 123, brand: "bmw" }
 *
 */
const pick = keys => obj =>
  reduce
    (acc => k => ({ ...acc, [k]: obj[k] }))
    (Map)
    (keys)
;

export { pick };
