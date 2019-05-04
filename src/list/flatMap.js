import { map } from "./map";
import { flatten } from "./flatten";
import { compose } from "./compose";

// different implementations
// {@see https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays/25804569#25804569}
let flatMapAlt;
flatMapAlt = f => x => map(f)(x).reduce((xs, ys) => [...xs, ...ys]);
flatMapAlt = f => x => x.map(f).reduce((xs, ys) => [...xs, ...ys], []);
flatMapAlt = f => x => x.map(f).reduce((xs, ys) => [...xs, ...ys]);
flatMapAlt = f => x => Array.prototype.concat.apply([], x.map(f));
flatMapAlt = f => x => Array.prototype.concat.call([], ...x.map(f));
flatMapAlt = f => x => [].concat(...map(f)(x));
flatMapAlt = f => x => [].concat(...x.map(f));

// implemented using own lib fns
flatMapAlt = f => x => flatten (map (f) (x));
flatMapAlt = f => x =>
  compose(
    flatten,
    map(f)
  )(x);

/**
 * @param {function(*): *} f
 * @return {function(*[]): *[]}
 */
const flatMap = f => x => Array.prototype.concat(...x.map(f));

export { flatMap };
