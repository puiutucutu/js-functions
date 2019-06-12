import test from "tape";
import { lowercase } from "../lowercase";

test("lowercase", function(t) {
  const text = "Hello World";

  t.deepEqual(
    lowercase (text),
    "hello world",
    "should return the expected value"
  );

  t.end();
});
