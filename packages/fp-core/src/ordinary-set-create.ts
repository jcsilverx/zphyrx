import { EMPTY } from "./empty";

type ExcludeSymbol<T> = T extends symbol ? never : T;

type OrdinarySet<T> = Set<ExcludeSymbol<T>>;

/**
 * @since 0.0.20
 */
const ordinarySetCreate = <T>(a: readonly T[]): OrdinarySet<T> => {
  let len = a.length >>> 0;

  let R: OrdinarySet<T> = new Set<ExcludeSymbol<T>>();
  let k = 0;

  while (k < len) {
    let E = a[k];

    if (E !== EMPTY && typeof E !== "symbol") {
      R.add(E as ExcludeSymbol<T>);
    }

    k++;
  }

  return R;
};

export { ordinarySetCreate };
