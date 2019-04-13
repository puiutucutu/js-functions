/**
 * @param {function(*): *} mapper
 * @return {function([]): []}
 */
const map = mapper => mappable => mappable.map(mapper);

export { map };
