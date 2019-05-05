import test from "tape";
import { reduce, apply } from "../src/list";
import { map } from "../src/list/native";
import { foldl } from "../src/list/native/foldl";
import { isArray } from "../src/helpers/isArray";

const concat = xs => ys => Array.prototype.concat(xs, ys);
// const concat = xs => ys => (isArray(ys) ? [...xs, ...ys] : [...xs, ys]);

test("flatten function implemented from smaller parts", function(t) {
  const flatten = xs => foldl(concat)([])(xs);
  const flattener = xs => flatten(
    map (x => (isArray(x) ? flattener(x) : x)) (xs)
  );

  const xs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const ys = [1, [2, [3, [4, [5], 6], 7], 8], 9];

  t.deepEqual(
    flatten(xs),
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "returns expected value"
  );

  t.deepEqual(
    flattener(ys),
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "returns expected value"
  );

  t.end();
});
