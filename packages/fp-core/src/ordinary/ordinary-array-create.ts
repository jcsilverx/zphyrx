import { EMPTY } from "../empty";

/**
 * @internal
 *
 * @since 0.0.26
 */
type OrdinaryArrayCreate = {
  <T, S extends T>(a: readonly T[]): S[];
  <T>(a: readonly T[]): T[];
};

/**
 * @internal
 *
 * @category ordinary
 *
 * @since 0.0.26
 */
const ordinaryArrayCreate = (<T>(a: readonly T[]): T[] => {
  let len = a.length >>> 0;

  let R: T[] = [];
  let k = 0;
  let to = 0;

  while (k < len) {
    let E = a[k];

    if (E !== EMPTY) {
      R[to] = E;

      to++;
    }

    k++;
  }

  return R;
}) as OrdinaryArrayCreate;

export { ordinaryArrayCreate };
