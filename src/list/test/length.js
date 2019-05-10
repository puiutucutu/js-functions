import test from "tape";
import { length } from "../length";

test("length", function(t) {
  t.deepEqual(length ([1,2,3]), 3, "returns expected value");
  t.deepEqual(length ([]), 0, 'returns expected value when array is empty');
  t.end();
});
