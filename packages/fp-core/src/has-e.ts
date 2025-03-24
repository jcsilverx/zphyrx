type CompareFn<T, U, R = boolean> = (x: T, y: U) => R;

/**
 * @since 0.0.22
 */
const hasE = <T, U>(
  a: readonly U[],
  value: T,
  compareFn?: CompareFn<T, U>,
): boolean => {
  let len = a.length >>> 0;

  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  const compare: CompareFn<T, U> = (x, y): boolean =>
    // @ts-expect-error --- silent Eq comparisson =')
    compareFn ? compareFn(x, y) : x === y;

  let k = 0;

  while (k < len) {
    let E = a[k];

    if (compare(value, E)) {
      return true;
    }

    k++;
  }

  return false;
};

export { hasE };
