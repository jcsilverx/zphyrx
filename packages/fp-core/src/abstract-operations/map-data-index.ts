import { equals } from "../equals";
import { canonicalizeKeyedCollectionKey } from "../keyed-collections";

/**
 * @internal
 *
 * @category abstract operation
 *
 * @since 0.0.35
 */
const mapDataIndex = <K, T>(
  m: ReadonlyMap<K, T>,
  key: K,
  compareFn?: (x: K, y: K) => boolean,
): number => {
  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  let keysIter = m.keys();
  let k = canonicalizeKeyedCollectionKey(key);
  let index = 0;

  let E: IteratorResult<K, undefined>;

  while (!(E = keysIter.next()).done) {
    let e = E.value;

    if (equals(e, k, compareFn)) {
      return index;
    }

    index++;
  }

  return -1;
};

export { mapDataIndex };
