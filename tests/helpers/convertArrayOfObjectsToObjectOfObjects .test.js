import test from "tape";
import { convertArrayOfObjectsToObjectOfObjects } from '../../src/helpers'

test("testing `convertArrayOfObjectsToObjectOfObjects ` fn", function(t) {

  const data = [
    { id: 1, brand: "bmw", model: "7 Series" },
    { id: 2, brand: "mercedes", model: "S Class"}
  ];
  
  const actual = {
    "bmw": { id: 1, brand: "bmw", model: "7 Series" },
    "mercedes": { id: 2, brand: "mercedes", model: "S Class"}
  }

  const expected = convertArrayOfObjectsToObjectOfObjects(data, "brand");

  t.deepEqual(actual, expected, "returns expected result");
  t.end();
});
