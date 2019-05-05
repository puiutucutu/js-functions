import test from "tape";
import { reduce } from "../../src/list";

test("`reduce` function", function(t) {
  const reducer = (prev) => (next) => prev + next;
  const actual = reduce (reducer) (0) ([1, 2, 3, 4]);
  const expected = 10;

  t.deepEqual(
    actual,
    expected,
    "returns expected value"
  );

  t.throws(
    () => reduce (reducer) (0) (null),
    /^TypeError: `items` must be an array$/,
    "throws TypeError with `items` is not an array"
  );

  t.end();
});
