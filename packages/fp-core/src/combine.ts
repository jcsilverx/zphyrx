/**
 * @since 0.0.35
 */
const combine = (<K, T, U>(
  m: ReadonlyMap<K, T>,
  key: K,
  value: U,
  combineFn?: (x: T, y: U) => T | U,
): T | U => {
  let val = m.get(key);

  if (combineFn && val !== undefined) {
    return combineFn(val, value);
  }

  return value;
}) as {
  <K, T, U>(
    m: ReadonlyMap<K, U>,
    key: K,
    value: T,
    combineFn?: (x: T, y: U) => T | U,
  ): T | U;
  <K, T, U>(
    m: ReadonlyMap<K, T>,
    key: K,
    value: U,
    combineFn?: (x: T, y: U) => T | U,
  ): T | U;
};

export { combine };
