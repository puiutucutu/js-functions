import test from "tape";
import { head } from "../head";

test("head", function(t) {
  const actual = head ([1, 2, 3]);
  const expected = [1];

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
