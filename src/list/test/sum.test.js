import test from "tape";
import { sum } from "../sum";

test("sum", function(t) {
  t.deepEqual(sum ([1,2,3]), 6, "returns expected value");
  t.deepEqual(sum ([]), 0, 'returns expected value when array is empty');
  t.end();
});
