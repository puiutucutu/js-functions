import { createMap } from "../helpers/createMap";
import { compose, reduce } from '../list'
import { keys } from '../object/keys'
import { removeItem } from '../helpers/removeItem'

const Map = createMap();

/**
 * Immutably copies an object with all of the original properties with the
 * exception of the property identified by `key`.
 *
 * Note that this function only works on an object nested one level deep.
 *
 * @param {String} key
 * @return {function({}): {}} Object with all of the original properties
 * except the property denoted by `key`.
 */
const removeKeyFromObject = key => obj =>
  compose
    (reduce(map => k => ({ ...map, [k]: obj[k] })) (Map))
    (removeItem (key))
    (keys (obj))
;

export { removeKeyFromObject };
