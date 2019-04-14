import test from "tape";
import { flatten } from "../src";

test("`flatten` returns expected value", function(assert) {
  const actual = [[1, 2, 3], [4, 5, 6]];

  const expected = [1, 2, 3, 4, 5, 6];

  assert.deepEqual(flatten(actual), expected);
  assert.end();
});

test("`flatten` can handle deeply nested arrays (i.e., four levels deep)", function(assert) {
  const actual = [
    [1, 2, 3],
    [[4, 5, 6], [7, 8, 9]],
    [10, 11, 12],
    [[[13, 14]]]
  ];

  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  assert.deepEqual(flatten(actual), expected);
  assert.end();
});
