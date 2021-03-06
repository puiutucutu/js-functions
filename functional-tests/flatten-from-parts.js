import test from "tape";
import { concat, foldl, map  } from "../src/list";
import { isArray } from "../src/validation/isArray";

const flatten = xs => foldl (concat) ([]) (xs);
const flattener = xs => flatten(
  map (x => (isArray(x) ? flattener(x) : x)) (xs)
);

const xs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const ys = [1, [2, [3, [4, [5], 6], 7], 8], 9];

test("flatten fn implemented from smaller parts", function(t) {
  t.deepEqual(
    flatten (xs),
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "returns expected value"
  );

  t.end();
});

test("flattener fn", function(t) {
  t.deepEqual(
    flattener (ys),
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    "returns expected value"
  );

  t.end();
})