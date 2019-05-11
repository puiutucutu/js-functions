import { filter } from "../list";

const removeFalsey = xs => filter(x => !!x)(xs);

export { removeFalsey };
