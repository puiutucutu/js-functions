import { lengthRecursive as length } from './lengthRecursive'

// map :: (a->b) -> [a] -> [b]
const map = f => xs => {
  const [head, ...tail] = xs;
  return length (xs) === 0 ? [] : [f(head), ...map(f)(tail)];
};

export { map as mapRecursively };
