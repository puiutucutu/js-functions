import { clone } from "./clone";

const reverse = xs => Array.prototype.reverse.call(clone(xs));

export { reverse };
