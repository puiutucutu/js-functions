import test from "tape";
import { compose } from "../src";

test("testing `compose` fn", function(t) {
  let actual, expected;

  const fnCall = compose(
    () => {},
    () => {}
  );
  actual = Object.prototype.toString.call(fnCall);
  expected = "[object Function]";
  t.equal(actual, expected, "`compose` returns a function on first call");

  const addsFive = a => a + 5;
  const multipliesBySix = a => a * 6;
  actual = compose(
    addsFive,
    multipliesBySix
  )(2);
  expected = 17;
  t.equal(actual, expected, "returns the expected value");

  t.end();
});
