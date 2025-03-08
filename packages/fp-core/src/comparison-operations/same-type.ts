/**
 * @since 0.0.14
 */
const sameType = (x: unknown, y: unknown): boolean => {
  if ((x === null && y === null) || (x === undefined && y === undefined)) {
    return true;
  }
  if (typeof x === "boolean" && typeof y === "boolean") return true;
  if (typeof x === "number" && typeof y === "number") return true;
  if (typeof x === "bigint" && typeof y === "bigint") return true;
  if (typeof x === "symbol" && typeof y === "symbol") return true;
  if (typeof x === "string" && typeof y === "string") return true;
  if (
    x !== null &&
    y !== null &&
    typeof x === "object" &&
    typeof y === "object"
  )
    return true;

  return false;
};

export { sameType };
