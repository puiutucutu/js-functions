import test from "tape";
import { foldl } from "../foldl";

test("fold (native implementation)", function(t) {
  const reducer = (prev) => (next) => prev + next;
  const actual = foldl (reducer) (0) ([1, 2, 3, 4]);
  const expected = 10;

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
