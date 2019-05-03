/**
 * Immutably removes an element from an array.
 *
 * @param {String|Number} value
 * @return {function(*[]): []}
 */
const removeItem = (value) => (items) => items.filter(item => item !== value);

export { removeItem }
