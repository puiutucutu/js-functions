import test from "tape";
import { pipe } from "../pipe";

test("pipe", function(t) {
  const increment = x => x + 1;
  const double = x => x * 2;

  t.deepEqual(
    pipe (increment, double) (1),
    4,
    "returns expected value when operation on non-array type"
  );

  const increments = xs => xs.map(x => x + 1);
  const doubles = xs => xs.map(x => x * 2);

  t.deepEqual(
    pipe (increments, doubles) ([1, 2, 3]),
    [4, 6, 8],
    "returns expected value when operating on array type"
  );

  t.end();
});
