import test from "tape";
import { includes } from "../includes";

test("includes", function(t) {
  const actual = includes (3) ([1,2,3,4]);
  const expected = true;

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
