import test from "tape";
import { removeNonDigits } from "../removeNonDigits";

test("removeNonDigits", function(t) {
  t.deepEqual(
    removeNonDigits("abc123"),
    "123",
    "should return the expected value"
  );

  t.deepEqual(
    removeNonDigits(""),
    "",
    "should return empty string when argument is an empty string"
  );

  t.end();
});
