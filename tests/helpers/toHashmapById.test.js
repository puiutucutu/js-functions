import test from "tape";
import { toHashmapById  } from "../src/helpers/toHashmapById";

test("testing `toHashmapById ` fn", function(t) {
  const data = [
    { id: 123, brand: "bmw", model: "7 Series" },
    { id: 456, brand: "mercedes", model: "S Class"}
  ];
  
  const actual = {
    123: { id: 123, brand: "bmw", model: "7 Series" },
    456: { id: 456, brand: "mercedes", model: "S Class"}
  }

  const expected = toHashmapById(data);
  
  t.equal(actual, expected, "returns expected result");
  t.end();
});
