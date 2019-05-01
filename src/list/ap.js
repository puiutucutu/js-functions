const apES5 = (...fns) => arr => {
  return fns.reduce(function(acc, f) {
    return acc.map(f);
  }, arr);
};

/*

const ap = (...fns) => x => Array.prototype.reduce.call(
  fns, 
  (result, f) => result.map(f), 
  x
);

*/

// applies a list of functions to a list of values
const ap = (...fns) => x => fns.reduce((acc, f) => acc.map(f), x);

export { ap };