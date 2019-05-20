import test from "tape";
import { getKeys } from "../getKeys";

test("getKeys", function(t) {
  const obj = {
    id: 123,
    brand: "bmw",
    model: "7 Series"
  };

  const actual = ["id", "brand", "model"];
  const expected = getKeys (obj);

  t.deepEqual(actual, expected, "returns expected result");
  t.end();
});
