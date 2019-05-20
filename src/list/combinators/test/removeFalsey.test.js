import test from "tape";
import { removeFalsey } from "../removeFalsey";

test("removeFalsey", function(t) {
  const values = [0, 0.0, "0", "", null, false, "false", []];

  console.log(removeFalsey(values));
  t.deepEqual(
    ["0", "false", []],
    removeFalsey (values),
    "returns expected value"
  );

  t.end();
});
