import { length } from "./length";

const sum = ([h, ...t]) => (length([h, ...t]) === 0 ? 0 : h + sum(t));

export { sum };
