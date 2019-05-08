import { reduce } from '../list/native'
import { createMap } from './createMap'

const Map = createMap();

/**
 * @param {String} propKeyName
 * @return {function(*[]): { k: string, v: * }}
 */
const convertArrayOfObjectsToMap = propKeyName => xs =>
  reduce
    (obj => item => ({ ...obj, [item[propKeyName]]: { ...item } }))
    (Map)
    (xs)
;

export { convertArrayOfObjectsToMap };
