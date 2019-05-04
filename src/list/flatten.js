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

/**
 * @param args
 * @return {*[]}
 */
const concat = (...args) => Array.prototype.concat(...args);

const flattenReduceConcat = (arr) => arr.reduce((a, b) => a.concat(b), []);
const flattenConcatES6 = arrays => [].concat(...arrays);
const flattenConcatES5 = arrays => [].concat.apply([], arrays);
const flattenRecursiveES6 = arr =>
  Array.isArray(arr)
    ? [].concat(...arr.map(flattenRecursiveES6))
    : [...arr];

const flattenRecursiveAlternateES6 = arr =>
  [].concat(
    ...arr.map(el =>
      Array.isArray(el) ? flattenRecursiveAlternateES6(el) : el
    )
  );

export { flatten };
