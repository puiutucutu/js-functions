const prototypeLessObject = Object.create(null);

/**
 * @param {String} propKeyName
 * @return {function(*[]): { k: string, v: * }}
 */
const convertArrayOfObjectsToMap = propKeyName => items =>
  items.reduce(
    (obj, item) => ({
      ...obj,
      [item[propKeyName]]: { ...item }
    }),
    prototypeLessObject
  );

export { convertArrayOfObjectsToMap };
