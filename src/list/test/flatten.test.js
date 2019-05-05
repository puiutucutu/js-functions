import test from "tape";
import { flatten } from "../flatten";

test("`flatten` function", function(assert) {
  assert.deepEqual(
    flatten([[1, 2, 3], [4, 5, 6]]),
    [1, 2, 3, 4, 5, 6],
    "returns expected value"
  );

  assert.deepEqual(
    flatten([[1, 2, 3], [[4, 5, 6], [7, 8, 9]], [10, 11, 12], [[[13, 14]]]]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    "can handle deeply nested arrays (i.e., four levels deep)"
  );

  assert.end();
});
