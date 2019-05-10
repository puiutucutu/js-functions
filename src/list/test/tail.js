import test from "tape";
import { tail } from "../tail";

test("tail", function(t) {
  const actual = tail ([1, 2, 3]);
  const expected = [2, 3];

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
