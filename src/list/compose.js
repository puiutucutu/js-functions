/**
 * compose :: (a -> b) -> (b -> c) -> a -> c
 *
 * @param {Function} f
 * @return {function(g: Function): function(x: String|Number|Array|Object): *}
 */
const compose = f => g => x => f(g(x));

export { compose };
