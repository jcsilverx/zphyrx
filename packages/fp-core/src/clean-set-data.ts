import { EMPTY } from "./empty";

type ExcludeSymbol<T> = Exclude<T, symbol>;

/**
 * @since 0.0.19
 */
const cleanSetData = <T>(a: readonly T[]): Set<ExcludeSymbol<T>> => {
  let len = a.length >>> 0;

  let R: Set<ExcludeSymbol<T>> = new Set<ExcludeSymbol<T>>();
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

export { cleanSetData };
