/**
 * @example
 * 
 * Object.getPrototypeOf(Object.create(null)) === null; //=> true
 * 
 * @return {Object} An object without the prototype chain baggage.
 */
const createMap = () => Object.create(null);

export { createMap };
