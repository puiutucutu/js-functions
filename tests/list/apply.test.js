import test from "tape";
import { apply } from "../../src/list";

test("apply", function(t) {
  const applicator = x => x * 5;

  t.deepEqual(
    apply (applicator) (2),
    10,
    "returns expected value"
  );

  t.end();
});
