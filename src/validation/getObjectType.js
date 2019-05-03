/**
 * @param {*} x
 * @return {String}
 */
function getObjectType(x) {
  return Object.prototype.toString.call(x);
}

export { getObjectType };
