import { sameType } from "./same-type";
import { sameValueNonNumber } from "./same-value-non-number";
import { sameValueNumber } from "./same-value-number";

/**
 * @since 0.0.14
 */
const sameValue = (x: unknown, y: unknown): boolean => {
  if (!sameType(x, y)) return false;

  if (typeof x === "number" && typeof y === "number") {
    return sameValueNumber(x, y);
  }

  return sameValueNonNumber(x, y);
};

export { sameValue };
