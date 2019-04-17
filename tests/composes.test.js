import test from "tape";
import { composes } from "../src";

test("testing `composes` fn", function(t) {
  let fnCall, actual, expected;

  fnCall = composes(() => {});
  actual = Object.prototype.toString.call(fnCall);
  expected = "[object Function]";
  t.equal(actual, expected, "`composes` returns a function on first call");

  const addsFive = a => a + 5;
  const multipliesBySix = a => a * 6;
  actual = composes(addsFive, multipliesBySix)(2);
  expected = 17;
  t.equal(actual, expected, "returns the expected value on final invocation");

  t.end();
});
