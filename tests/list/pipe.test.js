import test from "tape";
import { pipe } from "../../src/list";

test("pipe", function(t) {
  const addOne = x => x + 1;
  const double = x => x * 2;

  t.deepEqual(
    pipe (addOne, double) (1),
    4,
    "returns expected value when operation on non-array type"
  );

  const addsOne = xs => xs.map(x => x + 1);
  const doubles = xs => xs.map(x => x * 2);

  t.deepEqual(
    pipe (addsOne, doubles) ([1, 2, 3]),
    [4, 6, 8],
    "returns expected value when operating on array type"
  );

  t.end();
});
