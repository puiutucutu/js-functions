// from Javascript Allonge, pg 48
function maybe(f) {
  return function() {
    var i;
    if (arguments.length === 0) {
      return;
    } else {
      for (i = 0; i < arguments.length; ++i) {
        if (arguments[i] == null) {
          return;
        }
        return fn.apply(this, arguments);
      }
    }
  };
}

// es6 rewrite
const maybe = f => (...args) => {
  const argsLen = args.length;
  if (argsLen === 0) {
    return;
  }

  for (let i = 0; i < argsLen; ++i) {
    if (args[i] === null) {
      return;
    }
  }

  return fn(...args);
}
