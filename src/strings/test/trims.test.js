import test from "tape";
import { trims } from "../trims";

test("trims", function(t) {
  const texts = [
    " hello world ",
    " lorem ipsum",
    " "
  ];

  t.deepEqual(
    trims (texts),
    ["hello world","lorem ipsum",""],
    "should return the expected value"
  );

  t.end();
});
