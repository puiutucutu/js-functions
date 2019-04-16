import test from "tape";
import { composes } from "../src";

test("`composes` returns a function on first call", function(assert) {
  const fnCall = composes(() => {});
  const actual = Object.prototype.toString.call(fnCall);
  const expected = "[object Function]";

  assert.equal(actual, expected);
  assert.end();
});
