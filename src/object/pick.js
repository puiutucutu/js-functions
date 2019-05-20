import { reduce } from "../list";

/**
 * Returns an object with the supplied keys removed.
 *
 * ([a]) -> ({a}) -> {a}
 *
 * @param {Array} keys
 * @return {function(obj: Object): (Object)}
 */
const pick = keys => obj =>
  reduce
    (acc => k => ({ ...acc, [k]: obj[k] }))
    ({})
    (keys)
;

export { pick };
