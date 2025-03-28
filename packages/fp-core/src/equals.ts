/**
 * @internal
 *
 * @since 0.0.47
 */
const equals = <T>(x: T, y: T, compareFn?: (x: T, y: T) => boolean): boolean =>
  compareFn ? compareFn(x, y) : x === y;

export { equals };
