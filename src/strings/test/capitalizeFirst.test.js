import test from "tape";
import { capitalizeFirst } from "../capitalizeFirst";

test("capitalizeFirst", function(t) {
  t.deepEqual(
    capitalizeFirst ("hello"),
    "Hello",
    "should return the expected value"
  );

  t.deepEqual(
    capitalizeFirst (""),
    "",
    "should return empty string when argument is an empty string"
  );

  t.end();
});
