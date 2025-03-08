/**
 * @since 0.0.14
 */
type GetOwnKeys = {
  <T, K extends string>(r: Record<K, T>): K[];
  <T>(a: ArrayLike<T>): string[];
};

/**
 * The `_getOwnKeys_` method returns an array of all the own enumerable
 * property names of the given `Record`.
 *
 * @since 0.0.14
 *
 * @param r - The `Record` to get the keys from.
 * @returns An `Array` of strings representing the property names.
 */
const getOwnKeys = (<T, K extends string>(r: Record<K, T>): K[] =>
  Object.keys(r) as K[]) as GetOwnKeys;

export { getOwnKeys };
export type { GetOwnKeys };
