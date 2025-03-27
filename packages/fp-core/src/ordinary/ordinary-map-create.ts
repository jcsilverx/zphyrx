import { EMPTY } from "../empty";

/**
 * @internal
 *
 * @since 0.0.26
 */
type OrdinaryMapCreate = {
  // TODO -- improve naming
  <K, T, V extends K>(a: readonly [K, T][]): Map<V, T>;
  <K, T>(a: readonly [K, T][]): Map<K, T>;
};

/**
 * @internal
 *
 * @category ordinary
 *
 * @since 0.0.26
 */
const ordinaryMapCreate = (<K, T>(a: readonly [K, T][]): Map<K, T> => {
  let len = a.length >>> 0;

  let R: Map<K, T> = new Map<K, T>();
  let k = 0;

  while (k < len) {
    let [key, value] = a[k];

    if (key !== EMPTY) {
      R.set(key, value);
    }

    k++;
  }

  return R;
}) as OrdinaryMapCreate;

export { ordinaryMapCreate };
