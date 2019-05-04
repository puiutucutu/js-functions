import { reduce } from "./native";

// pipeNatively
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

/**
 * Reduces N functions over some value of `x`.
 *
 * @param {...Function} fns Each fn must have an arity of 1
 * @return {function(*): *} Some value `x` reduced over each fn of fns
 */
// const pipe = (...fns) => x => reduce ((y, f) => f(y)) (x) (fns);

export { pipe };
