import test from "tape";
import { convertArrayOfObjectsToMap } from '../convertArrayOfObjectsToMap'

test("convertArrayOfObjectsToMap", function(t) {

  const data = [
    { id: 1, brand: "bmw", model: "7 Series" },
    { id: 2, brand: "mercedes", model: "S Class"}
  ];
  
  const actual = {
    "bmw": { id: 1, brand: "bmw", model: "7 Series" },
    "mercedes": { id: 2, brand: "mercedes", model: "S Class"}
  }

  const expected = convertArrayOfObjectsToMap ("brand") (data);

  t.deepEqual(actual, expected, "returns expected result");
  t.end();
});
