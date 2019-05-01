import test from "tape";
import { reduceNative } from "../../src/list";

test("`reduceNative` function", function(t) {
  const reducer = (prev, next) => prev + next;
  const actual = reduceNative(0)(reducer)([1, 2, 3, 4]);
  const expected = 10;

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
