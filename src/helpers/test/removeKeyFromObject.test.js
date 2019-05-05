import test from "tape";
import { removeKeyFromObject } from "../removeKeyFromObject";

test("removeKeyFromObject", function(t) {
  const obj = {
    id: 123,
    brand: "bmw",
    model: "7 Series"
  };

  const actual = {
    id: 123,
    model: "7 Series"
  };

  const expected = removeKeyFromObject ("brand") (obj);

  t.deepEqual(actual, expected, "returns expected result");
  t.end();
});
