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

```js
const pipe = (...fns) => x =>
  reduce
    ((acc) => f => f (acc))
    (head (fns) (x))
    (tail (fns))
;
```

## Compose

Review this.

* https://github.com/1-liners/1-liners/blob/master/module/composeAll.js

```
composes :: ([(a -> b), (b -> c), ...(y -> z)]) => a => z
```

All of the following examples work. The fns `composesA` and `composesB` 
return the same result, but `composesA` looks weird because the final return 
function (prior to the entire function body being executed) is 
coming from inside the `reduce` closure itself.

```js
const log = (...args) => console.log(...args);
const addTwo = x => x + 2;
const addThree = x => x * 3;

const head = ([x, ...xs]) => x;
const tail = ([x, ...xs]) => xs;

const compose = f => g => x => f(g(x));
const composesA = (...fns) => fns.reduce((f, g) => x => f(g(x)));
const composesB = (...fns) => x => fns.reduce((f, g) => f(g(x)));
const composesB_ReducePrototypeCall = (...fns) => x =>   
  Array.prototype.reduce.call(fns, ((f,g) => f(g(x))))
  
const composesB_CurriedReduceCall = (...fns) => x =>   
  Array.prototype.reduce.call(
    fns, 
    ((f,g) => f(g(x)))
  )
  
function composesA_ES5(...fns) {
  return fns.reduce(function(f, g) {
    return function(x) {
      return f(g(x));
    };
  });
}

function composesB_ES5(...fns) {
  return function(x) {
    return fns.reduce(function(f, g) {
      return f(g(x));
    });
  };
}

const composeC = (...fns) => x =>   
  Array.prototype.reduce.call(
    fns.slice(1),
    ((prevFn, nextFn) => prevFn(nextFn(x))),
    (x) => fns[0](x)
  )

const composeC_2 = (...fns) => x => 
  Array.prototype.reduce.call(
    tail(fns),
    ((prevFn, nextFn) => prevFn(nextFn(x))),
    (x) => head(fns)(x)
  )

const composeD = (...fns) => x =>   
  fns.slice(1).reduce(
    ((prevFn, nextFn) => prevFn(nextFn(x))),
    (x) => head(fns)(x)
  )

log(
  "compose :: ",
  compose(addTwo)(addThree)(5)
); //=> 17

log(
  "composeA :: ",
  composesA(addTwo, addThree)(5)
); //=> 17

log(
  "composesB :: ",
  composesB(addTwo, addThree)(5)
); //=> 17

log(
  "composesB_ReducePrototypeCall :: ",
  composesB_ReducePrototypeCall(addTwo, addThree)(5)
); //=> 17

log(
  "composesB_CurriedReduceCall :: ",
  composesB_CurriedReduceCall(addTwo, addThree)(5)
); //=> 17

log(
  "composeC :: ",
  composeC(addTwo, addThree)(5)
);

log(
  "composeC_2 :: ",
  composeC_2(addTwo, addThree)(5)
);

log(
  "composeD :: ",
  composeD(addTwo, addThree)(5)
);
```

### Implemented Using Curried Reduce Fn

Havng curried the native `Array.reduce` function, we now re-implement `compose`.

```js
const uncurry = f => (a, b) => f (a) (b);
const reduce = f => accumulator => xs => Array.prototype.reduce.call
(
  xs,
  uncurry(f),
  accumulator
)

const reduce = f => accumulator => xs => {

log("------------------------------")
log("f", f)
log("accumulator", accumulator)
log("xs", xs)
log("------------------------------")

  return Array.prototype.reduce.call
(
  xs,
  uncurry(f),
  accumulator
)
}
```

### Implemented by Calculating the Accumulator's Value Before First Reduction

The `Array.reduce` signature takes two parameters:

* **1** - a reducer function
* **2** - an optional starting value that will serve as the accumulator throughout the reduction

This implementation of compose calculates the accumulator's value before the first reduction pass.

```js
const log = (...args) => console.log(...args);
const clone = xs => Array.prototype.slice.call(xs, 0)
const reverse = xs => Array.prototype.reverse.call(clone(xs));
const head = ([x]) => x
const tail = ([, ...tail]) => tail;

// reducing fns
const addTwo = x => x + 2;
const addSeven = x => x + 7;
const triple = x => x * 3;

const compose = (...fns) => x =>
{
  const [firstFn, ...remainingFns] = reverse (fns);

  return remainingFns.reduce
  (
    ((acc, f) => f (acc)),
    firstFn (x)
  )
}

const compose2 = (...fns) => x =>
{
  const fnsRev = reverse (fns);
  const firstFn = head (fnsRev)
  const remainingFns = tail (fnsRev)
  const initialValue = firstFn (x); // => 15

  return Array.prototype.reduce.call
  (
    remainingFns,
    (acc, f) => f (acc),
    initialValue
  );
}

log(
  compose(
    addTwo,
    addSeven,
    triple
  )(5)
); //=> 24 from (((5 * 3) + 7) + 2)

log(
  compose2
  (
    addTwo,
    addSeven,
    triple
  )(5)
);
```

Here is an example of compose as a one liner but reimplemented. Note the abstraction of composing two functions together is now bound to the name of `compose` while the function `composes` represents the original behaviour of composing `N` amount of functions over some `x`.

```js
const log = (...args) => console.log(...args);
const clone = xs => Array.prototype.slice.call(xs, 0)
const reverse = xs => Array.prototype.reverse.call(clone(xs));
const head = ([x]) => x
const tail = ([, ...tail]) => tail;

const compose = f => g => x => f(g(x));
const composes = (...fns) => x => Array.prototype.reduce.call
  (
    compose (tail) (reverse) (fns),
    (acc, f) => f (acc),
    compose (head) (reverse) (fns) (x) //=> `15` (the initial starting value of the accumulator)

// reducing fns
const addTwo = x => x + 2;
const addSeven = x => x + 7;
const triple = x => x * 3;

log(
  composes(
    addTwo,
    addSeven,
    triple
  )(5)
); //=> 24 from (((5 * 3) + 7) + 2)
```

Continuing on, here is an example of using a curried implementation of `reduce` to create the composing function.

Take note of the implementation using a standard `reduce` where we have to manually reverse the fns as compared to the `reduceRight` implementation of composing behaviour to saves us the job of manually reversing the reductable array.

```js
const log = (...args) => console.log(...args);
const clone = xs => Array.prototype.slice.call(xs, 0);
const reverse = xs => Array.prototype.reverse.call(clone(xs));
const head = ([x]) => x;
const tail = ([, ...x]) => x;

const compose = f => g => x => f(g(x));
const uncurry = f => (a, b) => f (a) (b);
const reduce = reducer => accumulator => xs => Array.prototype.reduce.call
(
  xs,
  uncurry(reducer),
  accumulator
);

const reduceRight = reducer => accumulator => xs => Array.prototype.reduceRight.call
(
  xs,
  uncurry(reducer),
  accumulator
)

const composesWithCurriedReduce = (...fns) => x => 
  reduce
    ((acc) => f => f (acc))
    (compose (head) (reverse) (fns) (x))
    (compose (tail) (reverse) (fns))
;

const composesWithCurriedReduceRight = (...fns) => x =>
  reduceRight
    ((acc) => f => f (acc))
    (head (fns) (x))
    (tail (fns))
;

// reducing fns
const addTwo = x => x + 2;
const addSeven = x => x + 7;
const triple = x => x * 3;

log(
  composesWithCurriedReduce(
    addTwo,
    addSeven,
    triple
  )(5)
); //=> 24 from (((5 * 3) + 7) + 2)

log(
  composesWithCurriedReduceRight(
    addTwo,
    addSeven,
    triple
  )(5)
); //=> 24 from (((5 * 3) + 7) + 2)
```