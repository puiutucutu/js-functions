import test from "tape";
import { toHashmapByPropNameValue  } from "../toHashmapByPropNameValue";

test("toHashmapByPropNameValue", function(t) {
  const data = [
    { id: 123, brand: "bmw", model: "7 Series" },
    { id: 456, brand: "mercedes", model: "S Class"}
  ];
  
  const actual = {
    "bmw": { id: 123, brand: "bmw", model: "7 Series" },
    "mercedes": { id: 456, brand: "mercedes", model: "S Class"}
  }

  const expected = toHashmapByPropNameValue ("brand") (data);

  t.deepEqual(actual, expected, "returns expected result");
  t.end();
});
