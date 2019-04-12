/**
 * @param {String[]} texts
 * @return {String[]}
 */
const removeFalseyStrings = texts => texts.filter(el => !!el);

export { removeFalseyStrings }
