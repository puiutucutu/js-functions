/**
 * @param {function(*): *} mapper
 * @return {function([]): []}
 */
const map = mapper => mappable => Array.prototype.map.call(mappable, mapper);

/**
 * @param {Array} items
 * @return {function(*): Array}
 */
const mapImplementation = items => mapper => {
  const len = items.length;

  const mapped = [];
  for (let i = 0; i < len; i++) {
    mapped.push(mapper(items[i]));
  }

  return mapped;
};

export { map };
