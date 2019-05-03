import test from "tape";
import { keysOf } from "../../src/helpers";

test("testing `keysOf  ` fn", function(t) {
  const obj = {
    id: 123,
    brand: "bmw",
    model: "7 Series"
  };

  const actual = ["id", "brand", "model"];
  const expected = keysOf(obj);

  t.equal(actual, expected, "returns expected result");
  t.end();
});
