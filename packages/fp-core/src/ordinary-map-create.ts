import { EMPTY } from "./empty";

type OrdinaryMap<K, T> = K extends symbol ? never : Map<K, T>;

/**
 * @since 0.0.37
 */
const ordinaryMapCreate = <K, T>(
  a: ReadonlyArray<[K, T]>,
): OrdinaryMap<K, T> => {
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

  return R as OrdinaryMap<K, T>;
};

export { ordinaryMapCreate };
