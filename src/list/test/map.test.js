import test from "tape";
import { map } from "../map";

test("map (native implementation)", function(t) {
  const doubler = x => x * 2;

  const nums = [1, 2, 3];
  const actual = map (doubler) (nums);
  const expected = [2, 4, 6];

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
