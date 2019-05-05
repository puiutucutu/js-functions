/**
 * An example of writing a simple function and then using more basic
 * blocks to build a more complex solution.
 *
 * Difficulty for me to understand at first glance.
 *
 * @link {https://stackoverflow.com/questions/10865025/merge-flatten-an-array-of-arrays/39006196#39006196}
 */

const reduce = f => x => xs =>
  Array.prototype.reduce.call(
    xs,
    f,
    x
  );

const uncurry = f => (a, b) => f (a) (b);
const foldl = f => acc => xs => reduce (uncurry(f)) (acc) (xs); // aka reduce

const concat = xs => y => xs.concat(y);
const map = f => xs => Array.prototype.map.call(xs, f);
const isArray = Array.isArray;
const apply = f => a => f(a);

const xs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // 2-d nesting
const ys = [1, [2, [3, [4, [5], 6], 7], 8], 9]; // 5-d deep nesting

// the actual function to flatten an array - a self-explanatory one-line
const flatten = xs => foldl (concat) ([]) (xs);

// the derived recursive function
const flattener = xs => flatten
  (map (x => (isArray(x) ? flattener(x) : x)) (xs))
;

console.log("flatten >> ", flatten(xs));
console.log("flattener >> ", flattener(ys));