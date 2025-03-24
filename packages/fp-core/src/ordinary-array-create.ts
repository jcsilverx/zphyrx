import { EMPTY } from "./empty";

type ExcludeSymbol<T> = T extends symbol ? never : T;

type OrdinaryArray<T> = Array<ExcludeSymbol<T>>;

/**
 * @since 0.0.26
 */
const ordinaryArrayCreate = <T>(a: readonly T[]): OrdinaryArray<T> => {
  let len = a.length >>> 0;

  let R: OrdinaryArray<T> = [];
  let k = 0;
  let to = 0;

  while (k < len) {
    let E = a[k];

    if (E !== EMPTY && typeof E !== "symbol") {
      R[to] = E as ExcludeSymbol<T>;

      to++;
    }

    k++;
  }

  return R;
};

export { ordinaryArrayCreate };
