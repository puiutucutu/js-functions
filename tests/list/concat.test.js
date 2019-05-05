import test from "tape";
import { concat } from "../../src/list";

test("concat", function(t) {
  t.deepEqual(
    concat ([1, 2]) ([3, 4]),
    [1, 2, 3, 4],
    "returns expected value"
  );

  t.deepEqual(
    concat ([1, 2]) ([3, [4, 5]]),
    [1, 2, 3, [4, 5]],
    "does not concat nested arrays more than one level deep"
  );

  t.end();
});
