import test from "tape";
import { flatMap } from "../flatMap";

test("`flatMap` returns expected value", function(assert) {
  const nums = [1, 2, 3];
  const origWithDouble = x => [x, x * 2];

  const actual = flatMap(origWithDouble)(nums);
  const expected = [1, 2, 2, 4, 3, 6];

  assert.deepEqual(actual, expected);
  assert.end();
});
