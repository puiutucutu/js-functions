import test from "tape";
import { pipe } from "../../src/list";

test("`pipe` function", function(t) {
  const addOne = x => x + 1;
  const multiplyTwo = x => x * 2;

  t.deepEqual(
    pipe (addOne, multiplyTwo) (1),
    4,
    "returns expected value when operation on non-array type"
  );

  const addsOne = xs => xs.map(x => x + 1);
  const multipliesByTwo = xs => xs.map(x => x * 2);

  t.deepEqual(
    pipe (addsOne, multipliesByTwo) ([1, 2, 3]),
    [4, 6, 8],
    "returns expected value when operating on array type"
  );

  t.end();
});
