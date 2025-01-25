/**
 * The `_sort_` method sorts the items of an array in
 * place and returns the reference to the same array now
 * sorted.
 *
 * @param A - An array.
 * @param compareFn - A function that determines the order of the elements.
 * @returns The reference to the original array, now sorted.
 */
const sort = <T>(A: readonly T[], compareFn?: (a: T, b: T) => number): T[] =>
  [...A].sort(compareFn);

export { sort };
