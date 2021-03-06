import test from "tape";
import { collapseWhitespace } from "../collapseWhitespace";

test("collapseWhitespace", function(assert) {
  const actual = "lorem  ipsum   dolor    sit     amet";
  const expected = "loremipsumdolorsitamet";

  assert.deepEqual(
    collapseWhitespace(actual),
    expected,
    "returns expected value"
  );

  assert.deepEqual(
    collapseWhitespace("hello   \r\n   world"),
    "helloworld",
    "removes new lines"
  );

  assert.end();
});
