import { sameType } from "./same-type";
import { sameValueNonNumber } from "./same-value-non-number";
import { sameValueZeroNumber } from "./same-value-zero-number";

/**
 * @since 0.0.14
 */
const sameValueZero = (x: unknown, y: unknown): boolean => {
  if (!sameType(x, y)) return false;

  if (typeof x === "number" && typeof y === "number") {
    return sameValueZeroNumber(x, y);
  }

  return sameValueNonNumber(x, y);
};

export { sameValueZero };
