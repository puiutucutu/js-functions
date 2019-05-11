// map :: (a->b) -> [a] -> [b]
const map = f => xs => {
  const [head, ...tail] = xs;
  return xs.length === 0 ? [] : [f(head), ...map(f)(tail)];
};

export { map as mapRecursively };
