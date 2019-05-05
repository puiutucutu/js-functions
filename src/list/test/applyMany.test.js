import test from "tape";
import { applyMany } from "../applyMany";

test("applyMany", function(t) {
  const addsOne = xs => xs.map(x => x + 1);
  const doubles = xs => xs.map(x => x * 2);

  t.deepEqual
  (
    applyMany (addsOne, doubles) ([1, 2]),
    [4, 6],
    "returns expected value"
  );

  t.end();
});
