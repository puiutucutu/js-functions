const prototypeLessObject = Object.create(null);

/**
 * Takes an array of objects and converts them to a hashmap using the
 * supplied propName for the key access as in <K,V>.
 *
 * @param {String} propName
 * @return {function(*[]): {}}
 */
const toHashmapByPropNameValue = propName => arr =>
  arr.reduce(
    (obj, el) => ({ 
      ...obj, 
      [el[propName]]: el 
    }),
    prototypeLessObject
  );

export { toHashmapByPropNameValue }
