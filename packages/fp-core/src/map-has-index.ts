import { canonicalizeKeyedCollectionKey } from "./keyed-collections";

/**
 * @since 0.0.35
 */
const mapHasIndex = <K, T>(
  m: ReadonlyMap<K, T>,
  key: K,
  compareFn?: (x: K, y: K) => boolean,
): number => {
  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  const compare: (x: K, y: K) => boolean = (x, y): boolean =>
    compareFn ? compareFn(x, y) : (x === x) === y;

  let keysIter = m.keys();
  let k = canonicalizeKeyedCollectionKey(key);
  let index = 0;

  let E: IteratorResult<K, undefined>;

  while (!(E = keysIter.next()).done) {
    let e = E.value;

    if (compare(e, k)) {
      return index;
    }

    index++;
  }

  return -1;
};

export { mapHasIndex };
