import { EMPTY } from "../empty";

/**
 * @internal
 *
 * @since 0.0.26
 */
type OrdinarySetCreate = {
  <T, S extends T>(a: readonly T[]): Set<S>;
  <T>(a: readonly T[]): Set<T>;
};

/**
 * @internal
 *
 * @category ordinary
 *
 * @since 0.0.26
 */
const ordinarySetCreate = (<T>(a: readonly T[]): Set<T> => {
  let len = a.length >>> 0;

  let R: Set<T> = new Set<T>();
  let k = 0;

  while (k < len) {
    let E = a[k];

    if (E !== EMPTY) {
      R.add(E);
    }

    k++;
  }

  return R;
}) as OrdinarySetCreate;

export { ordinarySetCreate };
