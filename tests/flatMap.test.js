import test from "tape";
import { flatMap } from "../src";

test("`flatMap` returns expected value", function(assert) {
  const nums = [1, 2, 3];
  const origWithDouble = x => [x, x + 1];

  const actual = flatMap(origWithDouble)(nums);
  const expected = [1, 2, 2, 3, 3, 4];

  assert.deepEqual(actual, expected);
  assert.end();
});
