function uniq(xs) {
  return xs.reduce(function(acc, x) {
    return acc.includes(x) ? acc : [...acc, x];
  }, [])
}

export { uniq }
