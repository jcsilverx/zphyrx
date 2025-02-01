/**
 * The `_reverse_` method reverses an array in place and returns
 * the reference to the same array, the first array item now becoming
 * the last, and the last element becoming the first.
 *
 * @param A - An array.
 * @returns The reference to the original array, now reversed.
 */
const reverse = <T>(A: readonly T[]): T[] => A.slice().reverse();

export { reverse };
