import test from "tape";
import { mapWithNativeCallback as map } from "../mapWithNativeCallback";

test("mapWithNativeCallback (native implementation)", function(t) {
  const doubler = x => i => xs => x * 2;

  const nums = [1, 2, 3];
  const actual = map (doubler) (nums);
  const expected = [2, 4, 6];

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
