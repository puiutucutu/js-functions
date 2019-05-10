function uniq(xs) {
  return [].reduce(function(acc, x) {
    return acc.includes(next) ? acc : [...acc, next];
  }, [])
}

export { uniq }
