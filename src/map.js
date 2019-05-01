const map = f => x => x.map(f);

const mapReimplementation = f => x => {
  const len = x.length;
  const out = [];
  for (let i = 0; i < len; i++) {
    out.push(f(x[i]));
  }
  return out;
};

export { map };
