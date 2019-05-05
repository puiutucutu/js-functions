import test from "tape";
import { apply } from "../apply";

test("apply", function(t) {
  const applicator = x => x * 5;

  t.deepEqual(
    apply (applicator) (2),
    10,
    "returns expected value"
  );

  t.end();
});
