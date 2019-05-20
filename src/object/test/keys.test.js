import test from "tape";
import { keys } from "../keys";

test("keys", function(t) {
  const obj = {
    id: 123,
    brand: "bmw",
    model: "7 Series"
  };

  const actual = ["id", "brand", "model"];
  const expected = keys (obj);

  t.deepEqual(actual, expected, "returns expected result");
  t.end();
});
