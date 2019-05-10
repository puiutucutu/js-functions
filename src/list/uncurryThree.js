const uncurryThree = f => (a, b, c) => f (a) (b) (c);

export { uncurryThree };
