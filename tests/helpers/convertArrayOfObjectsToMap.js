import test from "tape";
import { convertArrayOfObjectsToMap } from '../../src/helpers'

test("testing `convertArrayOfObjectsToMap` fn", function(t) {

  const data = [
    { id: 1, brand: "bmw", model: "7 Series" },
    { id: 2, brand: "mercedes", model: "S Class"}
  ];
  
  const actual = {
    "bmw": { id: 1, brand: "bmw", model: "7 Series" },
    "mercedes": { id: 2, brand: "mercedes", model: "S Class"}
  }

  const expected = convertArrayOfObjectsToMap(data, "brand");

  t.deepEqual(actual, expected, "returns expected result");
  t.end();
});
