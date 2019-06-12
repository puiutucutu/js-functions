import test from "tape";
import { search } from "../search";

test("search", function(t) {
  const text = "Hello World";

  t.deepEqual(
    search ("hello") (text),
    true,
    "should return the expected value"
  );

  t.end();
});
