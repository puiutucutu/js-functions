import test from "tape";
import { toHashmapByPropNameValue  } from "../../src/helpers";

test("testing `toHashmapByPropNameValue ` fn", function(t) {
  const data = [
    { id: 123, brand: "bmw", model: "7 Series" },
    { id: 456, brand: "mercedes", model: "S Class"}
  ];
  
  const actual = {
    "bmw": { id: 123, brand: "bmw", model: "7 Series" },
    "mercedes": { id: 456, brand: "mercedes", model: "S Class"}
  }

  const expected = toHashmapByPropNameValue ("brand") (data);
  
  t.equal(actual, expected, "returns expected result");
  t.end();
});
