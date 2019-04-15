import test from "tape";
import { compose } from "../src";

test("`compose` returns a function on first call", function(assert) {
  const fnCall = compose(() => {});
  const actual = Object.prototype.toString.call(fnCall);
  const expected = "[object Function]";

  assert.equal(actual, expected);
  assert.end();
});
