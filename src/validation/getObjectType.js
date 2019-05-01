/**
 * @param {*} n
 * @return {string}
 */
function getObjectType(n) {
  return Object.prototype.toString.call(n);
}

export { getObjectType };
