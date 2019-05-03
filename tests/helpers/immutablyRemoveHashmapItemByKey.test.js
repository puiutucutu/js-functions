import test from "tape";
import { immutablyRemoveHashmapItemByKey   } from "../src/helpers/immutablyRemoveHashmapItemByKey ";

test("testing `immutablyRemoveHashmapItemByKey  ` fn", function(t) {
  const obj = { id: 123, brand: "bmw", model: "7 Series" };
  
  const actual = { id: 123, model: "7 Series" };
  const expected = immutablyRemoveHashmapItemByKey ("brand") (obj);
  
  t.equal(actual, expected, "returns expected result");
  t.end();
});
