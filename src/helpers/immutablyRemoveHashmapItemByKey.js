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
const immutablyRemoveHashmapItemByKey = key => hashmap =>
  Object.keys(hashmap) // the k's in <k, v> for all hashmap items
    .filter(k => k !== key)
    .reduce((acc, k) => ({ ...acc, [k]: hashmap[k] }), {});

export { immutablyRemoveHashmapItemByKey }
