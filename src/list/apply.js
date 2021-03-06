/**
 * Applies some function `f` over some argument `x`.
 *
 * @param {Function} f
 * @return {function(x: any): T}
 */
const apply = f => x => f(x);

export { apply };
