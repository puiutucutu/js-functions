import test from "tape";
import { ap } from "../../src/list";

test("`ap` function", function(t) {
  const double = x => x * 2;
  const addOne = x => x + 1;

  const actual = ap(double, addOne)([1, 2, 3]);
  const expected = [3, 5, 7];

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
