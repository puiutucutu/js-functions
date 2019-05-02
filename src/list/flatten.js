/**
 * Recursively flattens an array of items of varying arities into an array
 * with an arity of one.
 *
 * @param {Array} items
 * @return {Array} The array of arrays reduced to a 1-d array
 */
const flatten = items =>
  items.reduce(
    (acc, el) => (Array.isArray(el) ? [...acc, ...flatten(el)] : [...acc, el]),
    []
  );

const flattenAlt = array =>
  Array.isArray(array) ? [].concat(...array.map(flatten)) : array;

export { flatten };
