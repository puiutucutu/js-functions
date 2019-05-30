import test from "tape";
import { splitAt } from "../splitAt";

test("splitAt", function(t) {
  t.deepEqual(splitAt (1) ("abc"), ["a","bc"], "returns expected value");
  t.deepEqual(splitAt (2) ([1,2,3,4]), [[1,2],[3,4]], "returns expected value");
  t.end();
});
