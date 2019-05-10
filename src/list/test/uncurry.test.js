import test from "tape";
import { uncurry } from "../uncurry";

test("uncurry", function(t) {
  const add = x => y => x + y;

  const actual = uncurry (add) (1, 2);
  const expected = 3;

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
