const reduce = reducer => items => initialValue => Array.prototype.reduce.call(items, reducer, initialValue)
