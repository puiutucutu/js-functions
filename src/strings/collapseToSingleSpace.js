const collapseToSingleSpace = s => String.prototype.replace.call(s, /\s+/gi, " ");

export { collapseToSingleSpace }
