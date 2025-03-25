import { canonicalizeKeyedCollectionKey } from "./keyed-collections";

/**
 * @since 0.0.28
 */
const setDataHas = (<T, U>(
  s: ReadonlySet<T>,
  value: U,
  compareFn?: (x: T, y: U) => boolean,
): boolean => {
  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  const compare: (x: T, y: U) => boolean = (x, y): boolean =>
    compareFn ? compareFn(x, y) : x === (y as unknown);

  let keysIter = s.keys();
  let V = canonicalizeKeyedCollectionKey(value);

  let E: IteratorResult<T, undefined>;

  while (!(E = keysIter.next()).done) {
    let e = E.value;

    if (compare(e, V)) {
      return true;
    }
  }

  return false;
}) as {
  <T, U>(
    s: ReadonlySet<T>,
    value: U,
    compareFn?: (x: T, y: U) => boolean,
  ): boolean;
  <T, U>(
    s: ReadonlySet<U>,
    value: T,
    compareFn?: (x: T, y: U) => boolean,
  ): boolean;
};

export { setDataHas };
