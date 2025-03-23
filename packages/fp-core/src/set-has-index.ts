import { canonicalizeKeyedCollectionKey } from "./keyed-collections";

type CompareFn<T, R = T> = (x: T, y: T) => R;

/**
 * @since 0.0.18
 */
const setDataIndex = <T, S extends T>(
  a: T[],
  value: S,
  compareFn?: CompareFn<S, boolean>,
) => {
  let len = a.length >>> 0;

  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  const compare: CompareFn<S, boolean> = (x, y): boolean =>
    compareFn ? compareFn(x, y) : x === y;

  let v = canonicalizeKeyedCollectionKey(value);
  let k = 0;

  while (k < len) {
    let E = a[k];

    if (compare(E as S, v)) {
      return k;
    }

    k++;
  }

  return -1;
};

export { setDataIndex };
