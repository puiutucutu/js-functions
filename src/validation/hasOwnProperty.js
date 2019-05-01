/**
 * @param {Object} obj
 * @param {String} propName
 * @return {Boolean}
 */
function hasOwnProperty(obj, propName) {
  return Object.prototype.hasOwnProperty.call(obj, propName);
}

export { hasOwnProperty };
