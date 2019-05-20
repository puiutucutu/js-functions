import test from "tape";
import { pick } from "../pick";

test("pick", function(t) {
  const obj = {
    id: 123,
    brand: "bmw",
    model: "7 Series"
  };

  t.deepEqual(
    {
      id: 123,
      brand: "bmw"
    },
    pick (["id", "brand"]) (obj),
    "returns expected result"
  );

  t.end();
});
