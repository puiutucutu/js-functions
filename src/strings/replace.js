/**
 * replace :: (a) -> (a) -> (a) -> a
 *
 * @param {String|RegExp} searchValue
 * @return {function(replaceValue: string): function(target: string): string}
 */
const replace = searchValue => replaceValue => target =>
  String.prototype.replace.call(target, searchValue, replaceValue);

export { replace };
