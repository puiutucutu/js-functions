import test from "tape";
import { uncurryThree } from "../uncurryThree";

test("uncurryThree", function(t) {
  const add = x => y => z => x + y + z;

  const actual = uncurryThree(add)(1, 2, 3);
  const expected = 6;

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
