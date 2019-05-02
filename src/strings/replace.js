/**
 * replace :: (a) => (a) => (a) -> a
 *
 * @param {String|RegExp} searchValue
 * @return {function(a: string): function(a: string): string}
 */
const replace = searchValue => replaceValue => s =>
  String.prototype.replace.call(s, searchValue, replaceValue);

export { replace };
