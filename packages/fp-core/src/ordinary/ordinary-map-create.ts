import { EMPTY } from "../empty";

/**
 * @internal
 *
 * @since 0.0.26
 */
type OrdinaryMapCreate = {
  <K, T, S extends T>(a: readonly [[K, T]]): Map<K, S>;
  <K, T>(a: readonly [[K, T]]): Map<K, T>;
};

/**
 * @internal
 *
 * @category ordinary
 *
 * @since 0.0.26
 */
const ordinaryMapCreate = (<K, T>(a: readonly [[K, T]]): Map<K, T> => {
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
