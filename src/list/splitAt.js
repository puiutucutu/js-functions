/**
 * splitAt :: Number -> [A] -> [A]
 *
 * @see https://stackoverflow.com/a/38757490
 * @param {Number} k
 * @return {function(xs: []|String): [[]]|[String]}
 */
const splitAt = k => xs => [
  xs.slice(0, k),
  xs.slice(k)
];

export { splitAt };
