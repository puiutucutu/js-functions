/**
 * @param {function(*)} f
 * @return {function(U): T}
 */
const apply = f => x => f(x);

export { apply };
