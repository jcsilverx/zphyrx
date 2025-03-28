/**
 * @internal
 *
 * @since 0.0.35
 */
const combine = <K, T>(
  m: ReadonlyMap<K, T>,
  key: K,
  value: T,
  combineFn?: (x: T, y: T) => T,
): T => {
  let val = m.get(key);

  if (combineFn !== undefined && val !== undefined) {
    return combineFn(value, val);
  }

  return value;
};

export { combine };
