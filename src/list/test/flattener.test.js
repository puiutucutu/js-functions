import test from "tape";
import { flattener } from "../flattener";

test("flatten", function(assert) {
  assert.deepEqual(
    flattener([[1, 2, 3], [4, 5, 6]]),
    [1, 2, 3, 4, 5, 6],
    "returns expected value"
  );

  assert.deepEqual(
    flattener([1, [2, [3, [4, [5], 6], 7], 8], 9]),
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "can handle deeply nested arrays (i.e., four levels deep)"
  );

  assert.end();
});
