import test from "tape";
import { omit } from "../omit";

test("omit", function(t) {
  const obj = {
    id: 123,
    brand: "bmw",
    model: "7 Series"
  };

  t.deepEqual(
    {
      model: "7 Series"
    },
    omit (["id", "brand"]) (obj),
    "returns expected result"
  );

  t.deepEqual(
    obj,
    omit ([]) (obj),
    "returns original when no keys are provided"
  );

  t.end();
});
