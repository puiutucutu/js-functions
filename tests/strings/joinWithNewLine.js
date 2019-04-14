import test from "tape";
import { joinWithNewLine } from "../../src/strings";

test("Returns expected value", function(assert) {
  const actual = ["a", "b", "c"];
  const expected =  'a\r\nb\r\nc';

  assert.equal(joinWithNewLine(actual), expected);

  assert.end();
});

