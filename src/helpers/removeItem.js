import { filter } from "../list/native"

/**
 * Immutably removes an element from an array.
 *
 * filter :: a -> [a] -> [a]
 *
 * @param {String|Number} y
 * @return {function(*[]): []}
 */
const removeItem = y => xs => filter (x => x !== y) (xs);

export { removeItem }
