import { reduce } from "../list";
import { createMap } from "./createMap";

const Map = createMap();

/**
 * Takes an array of objects and converts them to a hashmap using the
 * supplied key name.
 *
 * @param {String} key
 * @return {function(*[]): {}}
 */
const toHashmapByPropNameValue = key => xs =>
  reduce
    (acc => x => ({ ...acc, [x[key]]: x }))
    (Map)
    (xs)
;

export { toHashmapByPropNameValue };
