const ap = (...fns) => arr => {
  return fns.reduce(function(acc, f) {
    return acc.map(f);
  }, arr);
};

export { ap };
