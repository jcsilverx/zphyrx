/**
 * The `_shift_` method...
 *
 * @since 0.0.14
 *
 * @param n
 * @param exp
 * @returns
 */
const shift = (n: number, exp: number): number => {
  let [M, E = "0"] = `${n}e`.split("e");

  return +`${M}e${+E + exp}`;
};

export { shift };
