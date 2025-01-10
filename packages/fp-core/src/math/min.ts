/**
 * The `_min_` method returns the smallest value among the provided
 * numbers. Otherwise, `Infinity` if there are no parameters.
 *
 * @param values - A list of numbers to find the minimum value from.
 * @returns The smallest value from the provided numbers.
 */
const min = (...values: number[]): number => Math.min(...values);

export { min };
