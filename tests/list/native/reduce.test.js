import test from "tape";
import { reduce } from "../../../src/list/native";

test("`reduce` function using native implementation", function(t) {
  const reducer = (prev, next) => prev + next;
  const actual = reduce (reducer) (0) ([1, 2, 3, 4]);
  const expected = 10;

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
