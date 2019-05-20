import { filter } from "../filter";

/**
 * Immutably removes an element from an array.
 *
 * @param {String|Number} y
 * @return {function(*[]): []}
 */
const removeItem = y => xs => filter (x => x !== y) (xs);

export { removeItem };
