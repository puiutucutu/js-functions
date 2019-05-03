/**
 * Immutably copies an object with all of the original properties with the
 * exception of the property identified by `key`.
 *
 * Note that this function only works on an object nested one level deep.
 *
 * @param {object} hashmap
 * @param {string} key Coercing to string in argument list since object property
 * names can only be strings.
 * @return {object} Object with all of the original properties with the
 * exception of the property denoted by `key`.
 */
const immutablyRemoveHashmapItemByKey = (hashmap, key = String(key)) =>
  Object.keys(hashmap) // the k's in <K,V> for all hashmap items
    .filter(k => k !== key)
    .reduce((acc, k) => ({ ...acc, [k]: hashmap[k] }), {});

export { immutablyRemoveHashmapItemByKey }
