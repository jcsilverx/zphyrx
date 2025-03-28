import { equals } from "../equals";

/**
 * @internal
 *
 * @since 0.0.34
 */
type HasE = {
  <T, U>(
    a: readonly U[],
    value: T,
    compareFn?: (x: T, y: U) => boolean,
  ): boolean;
  <T, U>(
    a: readonly T[],
    value: U,
    compareFn?: (x: T, y: U) => boolean,
  ): boolean;
  <T>(a: readonly T[], value: T, compareFn?: (x: T, y: T) => boolean): boolean;
};

/**
 * @internal
 *
 * @category abstract operation
 *
 * @since 0.0.34
 */
const hasE: HasE = <T>(
  a: readonly T[],
  value: T,
  compareFn?: (x: T, y: T) => boolean,
): boolean => {
  let len = a.length >>> 0;

  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  let k = 0;

  while (k < len) {
    let E = a[k];

    if (equals(value, E)) {
      return true;
    }

    k++;
  }

  return false;
};

export { hasE };
