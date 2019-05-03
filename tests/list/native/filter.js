import test from "tape";
import { filter } from "../../../src/list/native/filter";

test("`reduce` function using native implementation", function(t) {
  const data = [1, 2, 3];
  const actual = filter(x => x !== 2)(data);
  const expected = [1, 3];

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
