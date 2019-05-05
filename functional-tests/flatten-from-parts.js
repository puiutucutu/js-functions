import test from "tape";
import { reduce } from "../src/list";

test("flatten function implemented from smaller parts", function(t) {
  const reducer = (prev) => (next) => prev + next;
  const actual = reduce (reducer) (0) ([1, 2, 3, 4]);
  const expected = 10;

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
