import test from "tape";
import { truncate } from "../truncate";

test("truncate", function(t) {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  t.deepEqual(
    truncate (3) (text),
    "Lorem ipsum dolor",
    "should return the expected value"
  );

  t.end();
});
