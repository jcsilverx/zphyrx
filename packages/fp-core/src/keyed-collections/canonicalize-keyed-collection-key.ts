import { sameValue } from "../comparison-operations";

/**
 * @since 0.0.16
 */
const canonicalizeKeyedCollectionKey = <K>(key: K): K =>
  sameValue(key, -0) ? (+0 as K) : key;

export { canonicalizeKeyedCollectionKey };
