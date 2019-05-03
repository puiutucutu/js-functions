import test from "tape";
import { removeItem   } from "../src/helpers/removeItem ";

test("testing `removeItem  ` fn", function(t) {
  const queuedIds = [1, 2, 3, 4, 5];
  
  t.equal(
    [1, 2, 4, 5], 
    removeItem (3) (queuedIds), 
    "returns expected result when supplied Number[]"
  );

  cosnt randomStrings = ["ab", "cd", "ef"];
  
  t.equal(
    ["ab", "cd"],
    removeItem ("ef") (randomStrings), 
    "returns expected result when supplied String[]"
  );
  
  t.end();
});
