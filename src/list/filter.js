/**
 * @param {function(T): boolean} predicate
 * @return {function(T[]): T[]}
 */
function filter(predicate) {
  return function(n) {
    const collection = [],
      len = n.length;

    for (let i = 0; i < len; i++) {
      if (predicate(n[i]) === true) {
        collection.push(n[i]);
      }
    }

    return collection;
  };
}

export { filter };
