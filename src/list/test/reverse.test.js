import test from "tape";
import { reverse } from "../reverse";

test("reverse", function(t) {
  const actual = reverse ([1,2,3]);
  const expected = [3,2,1];

  t.deepEqual(actual, expected, "returns expected value");
  t.end();
});
