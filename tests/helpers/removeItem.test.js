import test from "tape";
import { removeItem   } from "../src/helpers/removeItem ";

test("testing `removeItem  ` fn", function(t) {
  const queuedIds = [1, 2, 3, 4, 5];
  const actual = [1, 2, 4, 5];

  const expected = removeItem  (3) (queuedIds);
  
  t.equal(actual, expected, "returns expected result");
  t.end();
});
