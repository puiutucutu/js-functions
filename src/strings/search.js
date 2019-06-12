import { lowercase } from "./lowercase";

/**
 * search :: String -> String -> Bool
 *
 * @param {String} needle
 * @return {function(haystack: String): Boolean}
 */
const search = needle => haystack => {
  const regex = new RegExp(lowercase(needle));
  return regex.test(String(lowercase(haystack)));
};

export { search };
