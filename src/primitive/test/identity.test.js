import test from "tape";
import { identity } from "../identity";

test("identity", function(assert) {
  assert.deepEqual(identity("a"), "a", "returns expected value");
  assert.deepEqual(identity([1,2,3]), [1,2,3], "returns expected array value");
  assert.deepEqual(identity(""), "", "returns empty string when empty string supplied");
  assert.deepEqual(identity(false), false, 'returns expected value when supplied `false`');
  assert.deepEqual(identity(0), 0, 'returns expected value when supplied `0`');
  assert.deepEqual(identity(null), null, "returns expected value when supplied `null`");
  assert.deepEqual(identity(undefined), undefined, "returns expected value when supplied `undefined`");
  assert.deepEqual(identity(void 0), void 0, 'returns expected value when supplied `void 0`');

  assert.end();
});
