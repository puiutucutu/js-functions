import test from "tape";
import { compose } from "../compose";

test("compose", function(t) {
  let actual, expected, fnCall;

  const noop = () => {};

  fnCall = compose (noop)
  actual = Object.prototype.toString.call(fnCall);
  expected = "[object Function]";
  t.equal(actual, expected, "returns a function on first partial application");

  fnCall = compose (noop) (noop)
  actual = Object.prototype.toString.call(fnCall);
  expected = "[object Function]";
  t.equal(actual, expected, "returns a function on second partial application");

  const addsFive = a => a + 5;
  const multipliesBySix = a => a * 6;

  t.equal(
    compose (addsFive) (multipliesBySix) (2),
    17,
    "returns the expected value"
  );

  t.end();
});
