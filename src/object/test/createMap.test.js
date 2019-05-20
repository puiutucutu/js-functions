import test from "tape";
import { createMap } from "../createMap";

test("createMap", function(t) {
  const mapObject = createMap();

  t.deepEqual(
    true,
    mapObject.__proto__ === undefined,
    "returns expected result"
  );

  t.end();
});
