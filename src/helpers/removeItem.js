/**
 * Immutably removes an element from an array.
 *
 * @param {Array} items 1-d array
 * @param {Number|String} value
 */
const removeItem = (items, value) => items.filter(item => item !== value);

export { removeItem }
