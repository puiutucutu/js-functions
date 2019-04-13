/**
 * @param {Array} items
 * @return {Array} The array of arrays reduced to a 1-d array
 */
const flatten = items =>
  items.reduce(
    (acc, el) => (Array.isArray(el) ? [...acc, ...flatten(el)] : [...acc, el]),
    []
  );

/*

const sample = [[1, 2, 3], [[4, 5, 6], [7, 8, 9]], [10, 11, 12], [[[13, 14]]]];
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

*/


export { flatten}