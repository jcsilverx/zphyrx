import { EMPTY } from "./empty";

type OrdinaryArray<T> = T extends symbol ? never : T[];

/**
 * @since 0.0.26
 */
const ordinaryArrayCreate = <T>(a: ReadonlyArray<T>): OrdinaryArray<T> => {
  let len = a.length >>> 0;

  let R: Array<T> = [];
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

  return R as OrdinaryArray<T>;
};

export { ordinaryArrayCreate };
