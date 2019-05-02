import test from "tape";
import { removeFalseyStrings } from "../../src/strings";

test("`removeFalseyStrings` fn", function(assert) {
  const actual = ["a", "b", "c", "", false, undefined, 0, void 0, null];
  const expected = ["a", "b", "c"];

  assert.deepEqual(
    removeFalseyStrings(actual),
    expected,
    "returns expected value"
  );

  assert.end();
});
