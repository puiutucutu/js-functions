import { toHashmapByPropNameValue } from "./toHashmapByPropNameValue";

/**
 * Takes an array of objects and converts them to a hashmap using the value of
 * the `id` object property as the k in <k,v>.
 *
 * @param {Object[]} items
 * @returns {{ k: *, v: * }}
 */
const toHashmapById = items => toHashmapByPropNameValue ("id") (items);

export { toHashmapById }
