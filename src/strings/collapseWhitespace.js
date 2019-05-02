const collapseWhitespace = s => String.prototype.replace.call(s, /\s+/gi, "");

export { collapseWhitespace }
