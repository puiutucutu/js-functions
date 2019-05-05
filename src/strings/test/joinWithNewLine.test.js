import test from "tape";
import { joinWithNewLine } from "../joinWithNewLine";

test("joinWithNewLine", function(assert) {
  assert.deepEqual(
    joinWithNewLine(["a", "b", "c"]),
    "a\r\nb\r\nc",
    "returns expected value"
  );

  assert.end();
});
