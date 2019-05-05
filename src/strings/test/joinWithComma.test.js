import test from "tape";
import { joinWithComma } from "../joinWithComma";

test("joinWithComma", function(assert) {
  assert.deepEqual(
    joinWithComma(["a", "b", "c"]),
    "a,b,c",
    "returns expected value"
  );

  assert.deepEqual(
    joinWithComma([]),
    "",
    "returns empty string when empty array is provided"
  );

  assert.end();
});
