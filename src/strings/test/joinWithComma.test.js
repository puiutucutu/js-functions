import test from "tape";
import { joinWithComma } from "../joinWithComma";

test("Returns expected value", function(assert) {
  const actual = ["a", "b", "c"];
  const expected = "a,b,c";

  assert.equal(joinWithComma(actual), expected);

  assert.end();
});

test("Returns empty string when empty array is provided", function(assert) {
  const actual = [];
  const expected = "";

  assert.equal(joinWithComma(actual), expected);

  assert.end();
});
