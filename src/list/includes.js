/**
 * includes :: a -> [a] -> Boolean
 *
 * @param {*} x
 * @return {function(*): Boolean}
 */
const includes = x => xs => Array.prototype.includes.call
(
  xs,
  x
);

export { includes };
