/**
 * @since 0.0.14
 */
const sameValueZeroNumber = (x: number, y: number): boolean => {
  if (Number.isNaN(x) && Number.isNaN(y)) return true;

  if (x === 0 && y === 0) return true;
  if (x === y) return true;

  return false;
};

export { sameValueZeroNumber };
