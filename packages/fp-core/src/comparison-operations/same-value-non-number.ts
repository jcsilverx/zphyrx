import { sameType } from "./same-type";

/**
 * @since 0.0.14
 */
const sameValueNonNumber = (x: unknown, y: unknown): boolean => {
  if (!sameType(x, y)) return false;

  if (x === null || x === undefined) return true;
  if (typeof x === "bigint") return x == y;
  if (typeof x === "string" && typeof y === "string") return x === y;
  if (typeof x === "boolean" && typeof y === "boolean") return x === y;

  return x === y;
};

export { sameValueNonNumber };
