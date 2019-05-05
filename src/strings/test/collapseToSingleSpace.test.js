import test from "tape";
import { collapseToSingleSpace } from "../collapseToSingleSpace";

test("`collapseToSingleSpace` fn", function(assert) {
  const actual = "lorem  ipsum   dolor    sit     amet";
  const expected = "lorem ipsum dolor sit amet";

  assert.deepEqual(
    collapseToSingleSpace(actual),
    expected,
    "returns expected value"
  );

  assert.end();
});
