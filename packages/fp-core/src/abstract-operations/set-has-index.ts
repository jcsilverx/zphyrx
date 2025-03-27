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
 * @since 0.0.29
 */
type SetHasIndex = {
  <T, U>(
    s: ReadonlySet<T> | ReadonlySetLike<T>,
    value: U,
    compareFn?: (x: T, y: U) => boolean,
  ): number;
  <T>(
    s: ReadonlySet<T> | ReadonlySetLike<T>,
    value: T,
    compareFn?: (x: T, y: T) => boolean,
  ): number;
};

/**
 * @internal
 *
 * @category abstract operation
 *
 * @since 0.0.34
 */
const setHasIndex: SetHasIndex = <T>(
  s: ReadonlySet<T> | ReadonlySetLike<T>,
  value: T,
  compareFn?: (x: T, y: T) => boolean,
): number => {
  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  const compare: (x: T, y: T) => boolean = (x, y): boolean =>
    compareFn ? compareFn(x, y) : x === y;

  let keysIter = s.keys();
  let v = canonicalizeKeyedCollectionKey(value);
  let index = 0;

  let E: IteratorResult<T, undefined>;

  while (!(E = keysIter.next()).done) {
    let e = E.value;

    if (compare(e, v)) {
      return index;
    }

    index++;
  }

  return -1;
};

export { setHasIndex };
