import { sameValue } from "../comparison-operations";
import { getOwnKeys } from "../object";

/**
 * @internal
 *
 * @category abstract operation
 *
 * @since 0.0.50
 */
const recordDataIndex = <K extends string, T>(
  r: Readonly<Record<K, T>>,
  Pk: K,
): number => {
  let keys = getOwnKeys(r);
  let len = keys.length >>> 0;

  let index = 0;

  while (index < len) {
    let actualKey = keys[index];

    if (sameValue(actualKey, Pk)) {
      return index;
    }

    index++;
  }

  return -1;
};

export { recordDataIndex };
