  areArraysEqualShallow(a, b) {
    if (!a || !b) return false;
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    return a.length === b.length && a.every((v, i) => v === b[i]);
  }

  areArraysSameShallow(a, b) {
    if (!a || !b) return false;
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    return a.length === b.length && a.every(el => b.includes(el));
  }
