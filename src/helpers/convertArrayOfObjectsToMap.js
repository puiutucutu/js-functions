const prototypeLessObject = Object.create(null);

/**
 * @param {*[]} items
 * @param {String} propKeyName
 * @return {{ k: string, v: * }}
 */
const convertArrayOfObjectsToMap = (items, propKeyName) =>
  items.reduce(
    (obj, item) => ({
      ...obj,
      [item[propKeyName]]: { ...item }
    }),
    prototypeLessObject
  );

export { convertArrayOfObjectsToMap };
