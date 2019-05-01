/**
 * @param {function(*): *} f
 * @return {function([]): []}
 */
const map = f => x => x.map(f);

/**
 * @param {function(*): *} mapper
 * @return {function([]): []}
 */
const mapApply = mapper => mappable =>
  Array.prototype.map.call(mappable, mapper);

/**
 * @param {Array} items
 * @return {function(f: Function): f([])}
 */
const mapReimplementation = f => x => {
  const len = x.length;
  const mapped = [];
  for (let i = 0; i < len; i++) {
    mapped.push(f(x[i]));
  }
  return mapped;
};

export { map };
