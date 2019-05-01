import test from "tape";
import { composes } from "../src/list/composes";

test("testing `composes` fn", function(t) {
  let fnCall, actual, expected;

  fnCall = composes(() => {});
  actual = Object.prototype.toString.call(fnCall);
  expected = "[object Function]";
  t.equal(actual, expected, "`composes` returns a function on first call");

  const addsThree = a => a + 3;
  const addsFive = a => a + 5;
  const multipliesBySix = a => a * 6;
  actual = composes(addsThree, addsFive, multipliesBySix)(2);
  expected = 20;
  t.equal(
    actual,
    expected,
    "given a composition of three functions, returns the expected value"
  );

  t.end();
});
