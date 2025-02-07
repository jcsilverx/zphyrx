/**
 * The `_round_` method returns the value of a number
 * rounded to the nearest integer.
 *
 * @param x - A number.
 * @returns The value `x` rounded to the nearest integer.
 */
const round = (x: number): number => Math.round(x);

const abs = (x: number): number => Math.abs(x);

const ceil = (x: number): number => Math.ceil(x);

const floor = (x: number): number => Math.floor(x);

const trunc = (x: number): number => Math.trunc(x);

const pow = (x: number, y: number): number => Math.pow(x, y);

const random = (): number => Math.random();

export { round, abs, ceil, floor, trunc, pow, random };
