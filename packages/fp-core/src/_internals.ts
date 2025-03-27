/**
 * @internal
 *
 * @since 0.0.14
 */
const __slice = <T>(
  a: readonly T[],
  start?: number,
  end?: number,
): Array<T> => {
  let len = a.length >>> 0;
  let relativeStart = Math.trunc(start ?? 0) | 0;
  let k =
    relativeStart < 0
      ? Math.max(len + relativeStart, 0)
      : Math.min(relativeStart, len);

  let relativeEnd = end === undefined ? len : Math.trunc(end) | 0;

  let final =
    relativeEnd < 0
      ? Math.max(len + relativeEnd, 0)
      : Math.min(relativeEnd, len);

  let count = Math.max(final - k, 0);

  let R: T[] = new Array<T>(count);
  let n = 0;

  while (k < final) {
    let E = a[k];

    if (k in a) R[n] = E;

    k++;

    n++;
  }

  return R;
};

export { __slice };
