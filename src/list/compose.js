/**
 * compose :: (a -> b) -> (b -> c) -> c
 *
 * @param {Function} f
 * @return {function(g: Function): function(x: String|Number|Array|Object): *}
 */
const compose = f => g => x => f(g(x));

export { compose };
