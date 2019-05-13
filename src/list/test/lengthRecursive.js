import test from "tape";
import { lengthRecursive } from "../lengthRecursive";

test("lengthRecursive", function(t) {
  t.deepEqual(lengthRecursive ([1,2,3]), 3, "returns expected value");
  t.deepEqual(lengthRecursive ([]), 0, 'returns expected value when array is empty');
  t.end();
});
