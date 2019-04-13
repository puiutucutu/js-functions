function mapAlternate(items) {
  return function(mapper) {
    let len = items.length
    const mapped = [];
    for (let i = 0; i < len; i++) {
      let currItem = items[i]
      let mapped = mapper(currItem)
      mapped.push(mapped);
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
