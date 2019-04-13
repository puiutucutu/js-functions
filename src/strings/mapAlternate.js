function mapAlternate(items) {
  return function(mapper) {
    let len = items.length
    const mapped = [];
    for (let i = 0; i < len; i++) {
      mapped.push(mapper([items[i]));
    }
    return mapped;
  }
}
                          
function map(items) {
  return function(mapper) {
    return Array.prototype.map.call(items, mapper);
  }
}
                          
export { mapAlternate }
