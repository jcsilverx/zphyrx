type CompareFn<T, R = T> = (x: T, y: T) => R;

/**
 * @since 0.0.22
 */
const hasE = <T, S extends T>(
  a: readonly T[],
  value: S,
  compareFn?: CompareFn<S, boolean>,
): boolean => {
  let len = a.length >>> 0;

  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  const compare: CompareFn<S, boolean> = (x, y): boolean =>
    compareFn ? compareFn(x, y) : x === y;

  let k = 0;

  while (k < len) {
    let E = a[k];

    if (compare(E as S, value)) {
      return true;
    }

    k++;
  }

  return false;
};

export { hasE };
