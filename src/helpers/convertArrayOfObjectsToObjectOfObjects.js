const prototypeLessObject = Object.create(null);

/**
 * @param {*[]} items
 * @param {String} propKeyName
 * @return {{ k: string, v: * }}
 */
const convertArrayOfObjectsToObjectOfObjects = (items, propKeyName) =>
  items.reduce(
    (obj, item) => ({
      ...obj,
      [propKeyName]: { ...item }
    }),
    prototypeLessObject
  );

export { convertArrayOfObjectsToObjectOfObjects };
