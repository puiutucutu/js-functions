import { includes, reduce } from "../list"
import { keys } from '../helpers'

/**
 * ([a]) -> ({a}) -> {a}
 *
 * @param {Array} keys
 * @return {function(o: Object): (Object)}
 */
const omit = keys => o => {
  const hasKey = includes (keys);

  return reduce
    (acc => k => hasKey (k)
      ? { ...acc }
      : { ...acc, [k]: o[k] }
    )
    ({})
    (keys(o))
  ;
}

export { omit }