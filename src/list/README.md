# List

## Flatten

Different ways to implement flatten.

### Review

* https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays/39006196#39006196

### Non-Recursive

Non recursive means it won't flatten deeply nested arrays such that:

```
[1,[2,[3,[4,[5],6],7],8],9] => [1,2,[3,[4,[5],6],7],8],9]
```

Native implementations

```js
const flattenReduceConcat = (xs) => xs.reduce((a, b) => a.concat(b), []);
const flattenConcatES6 = arrays => [].concat(...arrays);
const flattenConcatES5 = arrays => [].concat.apply([], arrays);
```

Functional composition implementations

```js
const concat = xs => y => Array.prototype.concat(xs, y);
const uncurry = f => (a, b) => f (a) (b);
const reduce = f => accumulator => xs => Array.prototype.reduce.call
(
  xs,
  uncurry(f),
  accumulator
);

const flatten = xs => reduce (concat) ([]) (xs);
```

### Recursive

Will properly handle deeply nested arrays such that:

```
[1,[2,[3,[4,[5],6],7],8],9] => [1,2,3,4,5,6,7,8,9]
```

Implementations

```js
const flatten = xs =>
  xs.reduce(
    (acc, el) => (Array.isArray(el) ? [...acc, ...flatten(el)] : [...acc, el]),
    []
  )
  
const flattenDeepES6 = xs =>
  Array.isArray(xs)
    ? [].concat(...xs.map(flattenDeepES6))
    : [...xs];

const flattenDeepAlternateES6 = xs =>
  [].concat(
    ...xs.map(el => Array.isArray(el) ? flattenDeepAlternateES6(el) : el)
  );
```

Probably best to use a generator solution to avoid memory size issues.

## Pipe

Review this implementation:

* https://github.com/1-liners/1-liners/blob/master/module/pipe.js

## Compose

Review this.

* https://github.com/1-liners/1-liners/blob/master/module/composeAll.js

```js
const compose = f => g => x => f(g(x));
const composes = fns => fns.reduce((f, g) => x => f(g(x)));
```