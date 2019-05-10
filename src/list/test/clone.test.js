import test from "tape";
import { clone } from "../clone";

test("clone", function(t) {
  const toClone = [1, 2, 3];

  t.deepEqual(clone(toClone), toClone, "returns expected value");

  t.deepEqual(
    clone([1, 2, { a: "a", b: "b" }]),
    [1, 2, { a: "a", b: "b" }],
    "returns expected value when containing objects"
  );

  t.end();
});
