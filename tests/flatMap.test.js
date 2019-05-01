import test from "tape";
import { flatMap } from "../src";

const nums = [1, 2, 3];
const origWithDouble = x => [x, x + 1];

// @todo implement test

const flattened = flatMap(origWithDouble)(nums);
console.log("Flattened | ", flattened);
