import { EMPTY } from "./empty";

type OrdinarySet<T> = T extends symbol ? never : Set<T>;

/**
 * @since 0.0.20
 */
const ordinarySetCreate = <T>(a: readonly T[]): OrdinarySet<T> => {
  let R: Set<T | symbol> = new Set<T>(a);

  R.delete(EMPTY);

  return R as OrdinarySet<T>;
};

export { ordinarySetCreate };
