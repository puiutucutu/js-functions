/**
 * @param {function(*): *} mapper
 * @return {function(x: *[]): *[]}
 */
function map(mapper) {
  return function(n) {
    const mapped = [],
      length = n.length;

    for (let i = 0; i < length; i++) {
      mapped.push(mapper(n[i]));
    }

    return mapped;
  };
}

export { map };
