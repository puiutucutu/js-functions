/**
 * Whether or not every element in `a` matches the value in the same
 * position but in `b`.
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Boolean}
 */
function areArraysEqualShallow(a, b) {
  if (!a || !b) return false;
  if (!Array.isArray(a) || !Array.isArray(b)) return false;

  return a.length === b.length && a.every((v, i) => v === b[i]);
}

export { areArraysEqualShallow };

/**
 * Whether or not every value of `a` is somewhere in `b`.
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Boolean}
 */
function areArraysSameShallow(a, b) {
  if (!a || !b) return false;
  if (!Array.isArray(a) || !Array.isArray(b)) return false;

  return a.length === b.length && a.every(el => b.includes(el));
}

export { areArraysSameShallow };
