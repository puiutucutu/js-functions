const apES5 = (...fns) => arr => {
  return fns.reduce(function(acc, f) {
    return acc.map(f);
  }, arr);
};

// applies a list of functions to a list of values
// ap :: Apply f => f (a -> b -> ... n) -> f a -> f b -> f n
const ap = (...fns) => x => fns.reduce((acc, f) => acc.map(f), x);

export { ap };
