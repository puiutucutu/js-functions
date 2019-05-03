/**
 * @param {function(T): boolean} predicate
 * @return {function(T[]): T[]}
 */
function filter(predicate) {
  return function(items) {
    const collection = [];

    for (let i = 0; i < items.length; i++) {
      if (predicate(items[i]) === true) {
        collection.push(items[i]);
      }
    }

    return collection;
  };
}

export { filter };
