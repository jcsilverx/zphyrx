import { canonicalizeKeyedCollectionKey } from "../keyed-collections";

/**
 * @internal
 *
 * @since 0.0.29
 */
type ReadonlySetLike<T> = {
  keys(): Iterator<T>;
  has(value: T): boolean;
  readonly size: number;
};

/**
 * @internal
 *
 * @category abstract operation
 *
 * @since 0.0.34
 */
const setDataHas = <T extends U, U>(
  s: ReadonlySet<T> | ReadonlySetLike<T>,
  value: U,
  compareFn?: (x: U, y: U) => boolean,
): boolean => {
  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  const compare: (x: U, y: U) => boolean = (x, y): boolean =>
    compareFn ? compareFn(x, y) : x === y;

  let keysIter = s.keys();
  let v = canonicalizeKeyedCollectionKey(value);

  let E: IteratorResult<T, undefined>;

  while (!(E = keysIter.next()).done) {
    let e = E.value;

    if (compare(e, v)) {
      return true;
    }
  }

  return false;
};

export { setDataHas };
