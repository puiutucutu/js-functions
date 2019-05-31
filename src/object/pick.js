import { reduce } from "../list";

/**
 * Returns an object with the supplied keys removed.
 *
 * pick :: ([a]) -> ({a}) -> {a}
 *
 * @param {Array} keys
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
    ({})
    (keys)
;

export { pick };
