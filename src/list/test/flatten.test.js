import test from "tape";
import { flatten } from "../flatten";

test("flatten", function(assert) {
  assert.deepEqual(
    flatten([1, 2, [3, 4]]),
    [1, 2, 3, 4],
    "returns expected result"
  );

  assert.deepEqual(
    flatten([1, 2, [3, 4, [5, 6]]]),
    [1, 2, 3, 4, [5, 6]],
    "returns expected result but leaves deeply nested arrays greater than 2-d unchanged"
  );

  assert.end();
});
