const uncurry = f => (a, b) => f (a) (b);

export { uncurry };
