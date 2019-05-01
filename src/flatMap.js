import { map } from "./map";

// different implementations
let flatMapEx;
flatMapEx = f => x => map(f)(x).reduce((xs, ys) => [...xs, ...ys]);
flatMapEx = f => x => x.map(f).reduce((xs, ys) => [...xs, ...ys], []);
flatMapEx = f => x => x.map(f).reduce((xs, ys) => [...xs, ...ys]);
flatMapEx = f => x => Array.prototype.concat.apply([], x.map(f));
flatMapEx = f => x => [].concat(...map(f)(x));
flatMapEx = f => x => [].concat(...x.map(f));

// actual definition used
const flatMap = f => x => [].concat(...x.map(f));

export { flatMap };
