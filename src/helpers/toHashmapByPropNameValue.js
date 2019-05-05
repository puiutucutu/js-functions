import { reduce } from "../list";
import { createMap } from "./createMap";

const Map = createMap();

/**
 * Takes an array of objects and converts them to a hashmap using the
 * supplied propName for the key access as in <K,V>.
 *
 * @param {String} propName
 * @return {function(*[]): {}}
 */
const toHashmapByPropNameValue = propName => xs => reduce
  (obj => x => ({ ...obj, [x[propName]]: x }))
  (Map)
  (xs)
;

export { toHashmapByPropNameValue };
