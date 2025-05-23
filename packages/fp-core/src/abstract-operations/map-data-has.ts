import { equals } from "../equals";
import { canonicalizeKeyedCollectionKey } from "../keyed-collections";

/**
 * @internal
 *
 * @category abstract operation
 *
 * @since 0.0.34
 */
const mapDataHas = <K, T>(
  m: ReadonlyMap<K, T>,
  key: K,
  compareFn?: (x: K, y: K) => boolean,
): boolean => {
  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("Compare must be a callback function");
  }

  let keysIter = m.keys();
  let k = canonicalizeKeyedCollectionKey(key);

  let E: IteratorResult<K, undefined>;

  while (!(E = keysIter.next()).done) {
    let e = E.value;

    if (equals(e, k)) {
      return true;
    }
  }

  return false;
};

export { mapDataHas };
