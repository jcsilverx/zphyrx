import { EMPTY } from "../empty";

/**
 * @internal
 *
 * @since 0.0.50
 */
type OrdinaryRecordCreate = {
  <K extends PropertyKey, T, S extends K, V extends T>(
    entries: ReadonlyArray<[K, T]>,
  ): Record<S, V>;
  <K extends PropertyKey, T>(entries: ReadonlyArray<[K, T]>): Record<K, T>;
};

/**
 * @internal
 *
 * @category ordinary
 *
 * @since 0.0.50
 */
const ordinaryRecordCreate = (<K extends PropertyKey, T>(
  entries: ReadonlyArray<[K, T]>,
): Record<K, T> => {
  let len = entries.length >>> 0;

  let R = {} as Record<K, T>;
  let index = 0;

  while (index < len) {
    let [Pk, kValue] = entries[index];

    if (Pk !== EMPTY) {
      R[Pk] = kValue;
    }

    index++;
  }

  return R;
}) as OrdinaryRecordCreate;

export { ordinaryRecordCreate };
