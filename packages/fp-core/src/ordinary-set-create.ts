import { EMPTY } from "./empty";

type OrdinarySet<T> = T extends symbol ? never : Set<T>;

/**
 * @since 0.0.20
 */
const ordinarySetCreate = <T>(a: readonly T[]): OrdinarySet<T> => {
  let len = a.length >>> 0;

  let R: Set<T> = new Set<T>();
  let k = 0;

  while (k < len) {
    let E = a[k];

    if (E !== EMPTY && typeof E !== "symbol") {
      R.add(E);
    }

    k++;
  }

  return R as OrdinarySet<T>;
};

export { ordinarySetCreate };
