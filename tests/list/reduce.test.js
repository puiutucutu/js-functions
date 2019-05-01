import test from "tape";
import { reduce } from "../../src/list";

test("`reduce` function", function(t) {
  const actual = reduce(0)((prev, next) => prev + next)([1, 2, 3, 4]);
  const expected = 10;

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
