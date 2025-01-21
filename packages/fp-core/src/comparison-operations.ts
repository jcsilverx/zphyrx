import { isNaN } from "./index";

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

const sameValueNonNumber = (x: unknown, y: unknown): boolean => {
  if (!sameType(x, y)) return false;

  if (x === null || x === undefined) return true;
  if (typeof x === "bigint") return x == y;
  if (typeof x === "string" && typeof y === "string") return x === y;
  if (typeof x === "boolean" && typeof y === "boolean") return x === y;

  return x === y;
};

const sameValueNumber = (x: number, y: number): boolean => {
  if (isNaN(x) && isNaN(y)) return true;

  if (x === 0 && y === 0) return 1 / x === 1 / y;
  if (x === y) return true;

  return false;
};

const sameValueZeroNumber = (x: number, y: number): boolean => {
  if (isNaN(x) && isNaN(y)) return true;

  if (x === 0 && y === 0) return true;
  if (x === y) return true;

  return false;
};

const sameValue = (x: unknown, y: unknown): boolean => {
  if (!sameType(x, y)) return false;

  if (typeof x === "number" && typeof y === "number") {
    return sameValueNumber(x, y);
  }

  return sameValueNonNumber(x, y);
};

const sameValueZero = (x: unknown, y: unknown): boolean => {
  if (!sameType(x, y)) return false;

  if (typeof x === "number" && typeof y === "number") {
    return sameValueZeroNumber(x, y);
  }

  return sameValueNonNumber(x, y);
};

const equalNumber = (x: number, y: number): boolean => {
  if (isNaN(x) || isNaN(y)) return false;

  if (x === y) return true;
  if (x === 0 && y === 0) return 1 / x === 1 / y;

  return false;
};

export {
  sameType,
  sameValueNonNumber,
  sameValue,
  sameValueZero,
  sameValueNumber,
  sameValueZeroNumber,
  equalNumber,
};
