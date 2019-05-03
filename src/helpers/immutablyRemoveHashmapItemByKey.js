import { createMap } from "./createMap";

const Map = createMap();

/**
 * Immutably copies an object with all of the original properties with the
 * exception of the property identified by `key`.
 *
 * Note that this function only works on an object nested one level deep.
 *
 * @param {String} key
 * @return {Function({}): {}} Object with all of the original properties
 * except the property denoted by `key`.
 */
const immutablyRemoveHashmapItemByKey = key => obj =>
  Object.keys(obj)
    .filter(k => k !== key)
    .reduce((map, k) => ({ ...map, [k]: obj[k] }), Map);

export { immutablyRemoveHashmapItemByKey }
