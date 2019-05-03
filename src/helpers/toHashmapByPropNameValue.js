/**
 * Takes an array of objects and converts them to a hashmap using the
 * supplied propName as the key as in <K,V>.
 *
 * @param {array} arr
 * @param {string} propName
 * @returns {object}
 */
function toHashmapByPropNameValue(arr, propName) {
  return arr.reduce((acc, el) => {
    const k = el[propName];
    return { ...acc, [k]: el };
  }, {});
}

export { toHashmapByPropNameValue }
