/**
 * The `_max_` method returns the largest value among the provided
 * numbers. Otherwise, `-Infinity` if there are no parameters.
 *
 * @param values - A list of numbers to find the maximun value from.
 * @returns The largest value from the provided numbers.
 */
const max = (...values: number[]): number => Math.max(...values);

export { max };
