import test from "tape";
import { joinWithComma } from "../../src/strings";

test("Returns expected value", function(assert) {
  assert.plan(1);
  const input = ["a", "b", "c"];
  const expected = "a,b,c";

  assert.equal(joinWithComma(input), expected);
});
