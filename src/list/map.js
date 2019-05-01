/**
 * @param {function(*): *} f
 * @return {function(x: *[]): *[]}
 */
const map = f => x => {
  const len = x.length;
  const mapped = [];
  for (let i = 0; i < len; i++) {
    mapped.push(f(x[i]));
  }
  return mapped;
};

export { map };
