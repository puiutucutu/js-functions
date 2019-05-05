import { pipe } from "./pipe";

const applyMany = (...fns) => xs => pipe (...fns) (xs);

export { applyMany };
