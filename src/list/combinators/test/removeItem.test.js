import test from "tape";
import { removeItem } from "../removeItem";

test("removeItem", function(t) {
  const nums = [1, 2, 3, 4, 5];
  const strs = ["ab", "cd", "ef"];

  t.deepEqual(
    [1, 2, 4, 5],
    removeItem (3) (nums),
    "returns expected result when supplied Number[]"
  );

  t.deepEqual(
    ["ab", "cd"],
    removeItem ("ef") (strs),
    "returns expected result when supplied String[]"
  );

  t.end();
});
