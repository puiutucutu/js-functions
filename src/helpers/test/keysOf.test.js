import test from "tape";
import { keysOf } from "../keysOf";

test("testing `keysOf  ` fn", function(t) {
  const obj = {
    id: 123,
    brand: "bmw",
    model: "7 Series"
  };

  const actual = ["id", "brand", "model"];
  const expected = keysOf(obj);

  t.deepEqual(actual, expected, "returns expected result");
  t.end();
});
