import { sameValue } from "../comparison-operations";

const canonicalizeKeyedCollectionKey = <K>(key: K): K =>
  sameValue(key, -0) ? (+0 as K) : key;

export { canonicalizeKeyedCollectionKey };
