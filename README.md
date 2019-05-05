# js-functions

Just a place to store functions so I don't forget.

## Native Implementations

Using auto curried wrappers over native array functions internally when using
 native array functions.
 
Custom implementations of native array functions left for brevity.

## A Note on Concat

Using `apply` with concat "can cause stack overflows for large arrays, 
because every argument of a function is stored on the stack. - https://stackoverflow.com/a/39006196"

Spreading as shown below does not get translated into an apply.

```js
// ES6
const concat1 = xs => ys => [].concat(xs, ys);
const concat2 = xs => ys => [...xs, ...ys];
const concat3 = (...args) => Array.prototype.concat(...args)
const concatApply1 = xs => ys => [].concat(...xs, ...ys);
const concatApply2 = xs => ys => [].concat.apply(xs, ys);

```

```js
// babelified
"use strict";

var concat1 = function concat1(xs) {
  return function (ys) {
    return [].concat(xs, ys);
  };
};

var concat2 = function concat2(xs) {
  return function (ys) {
    return [].concat(xs, ys);
  };
};

var concat3 = function concat3() {
  var _Array$prototype;
  return (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, arguments);
};

var concatApply1 = function concatApply1(xs) {
  return function (ys) {
    var _ref;
    return (_ref = []).concat.apply(_ref, xs.concat(ys));
  };
};

var concatApply2 = function concatApply2(xs) {
  return function (ys) {
    return [].concat.apply(xs, ys);
  };
};
```