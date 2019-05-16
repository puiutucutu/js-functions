import test from "tape";
import { countUniques } from "../countUniques";

test("countUniques", function(t) {
  const xs = ["bmw", "mercedes", "bmw", "volkswagen", "bmw", "porsche"];

  const actual = countUniques (xs);
  const expected = {
    bmw: 3,
    mercedes: 1,
    volkswagen: 1,
    porsche: 1
  };

  t.deepEqual(actual, expected, "returns expected result");
  t.end();
});
