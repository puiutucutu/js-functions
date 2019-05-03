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

const filter = predicate => n => Array.prototype.filter.call(n, predicate);
const reduce = reducer => initial => items => items.reduce(reducer, initial);
const keysOf = obj => Object.keys(obj);
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const compose = f => g => x => f(g(x));

const removeKeyFromObject = key => obj => {
  const keys = keysOf(obj);
  const keysToKeep = filter (k => k !== key) (keys);
  return reduce((map, k) => ({ ...map, [k]: obj[k] })) (Map) (keysToKeep);
};

const removeKeyFromObjectInlined = key => obj =>
  pipe(
    filter (k => k !== key),
    reduce ((map, k) => ({ ...map, [k]: obj[k] })) (Map)
  )(keysOf(obj));

const removeKeyFromObjectUsingComposition = key => obj =>
  compose (reduce((map, k) => ({ ...map, [k]: obj[k] })) (Map))
          (filter(k => k !== key))
          (keysOf(obj));

export { immutablyRemoveHashmapItemByKey };
