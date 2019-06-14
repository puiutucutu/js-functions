import test from "tape";
import { trim } from "../trim";

test("trim", function(t) {
  const text = " hello world ";

  t.deepEqual(
    trim (text),
    "hello world",
    "should return the expected value"
  );

  t.end();
});
