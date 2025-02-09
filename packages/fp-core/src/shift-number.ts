/**
 * The `_shiftN_` method...
 *
 * @param n
 * @param exp
 * @returns
 */
const shiftN = (n: number, exp: number): number => {
  let [M, E = "0"] = `${n}e`.split("e");

  return +`${M}e${+E + exp}`;
};

export { shiftN };
