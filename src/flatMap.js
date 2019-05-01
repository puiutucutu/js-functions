import { map } from "./map";
import { flatten } from "./flatten";
import { compose } from "./compose";

// different implementations
let flatMapEx;
flatMapEx = f => x => map(f)(x).reduce((xs, ys) => [...xs, ...ys]);
flatMapEx = f => x => x.map(f).reduce((xs, ys) => [...xs, ...ys], []);
flatMapEx = f => x => x.map(f).reduce((xs, ys) => [...xs, ...ys]);
flatMapEx = f => x => Array.prototype.concat.apply([], x.map(f));
flatMapEx = f => x => [].concat(...map(f)(x));
flatMapEx = f => x => [].concat(...x.map(f));

// implemented using lib fns
flatMapEx = f => x => flatten(map(f)(x));
flatMapEx = f => x =>
  compose(
    flatten,
    map(f)
  )(x);

/**
 * @param {function(*): *} f
 * @return {function(*[]): *[]}
 */
const flatMap = f => x => [].concat(...x.map(f));

export { flatMap };
