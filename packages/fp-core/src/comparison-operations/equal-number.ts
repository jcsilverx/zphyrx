/**
 * @since 0.0.14
 */
const equalNumber = (x: number, y: number): boolean => {
  if (Number.isNaN(x) || Number.isNaN(y)) return false;

  if (x === y) return true;
  if (x === 0 && y === 0) return 1 / x === 1 / y;

  return false;
};

export { equalNumber };
