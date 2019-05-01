/**
 * @param {function(*): *} f
 * @return {function(x: *[]): *[]}
 */
const map = f => x => x.map(f);

/**
 * @param {function(*): *} mapper
 * @return {function(x: *[]): *[]}
 */
const mapApply = mapper => mappable => Array.prototype.map.call(mappable, mapper);

/**
 * @param {function(*): *} f
 * @return {function(x: *[]): *[]}
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
