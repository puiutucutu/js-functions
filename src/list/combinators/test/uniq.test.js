import test from "tape";
import { uniq } from "../uniq";

test("uniq", function(t) {
  const nums = [1, 2, 3, 3, 4, 5, 5, 6];
  const actual = uniq (nums);
  const expected = [1, 2, 3, 4, 5, 6];

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
