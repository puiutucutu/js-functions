/**
 * @param {Object} obj
 * @return {Boolean}
 */
const isEmptyObject = obj =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export { isEmptyObject };
