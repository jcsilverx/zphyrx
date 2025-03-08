import { insertionSort } from "./insertion-sort";
import { merge } from "./merge";

const MIN_RUN = 32;

/**
 * @since 0.0.14
 */
const timSort = <T>(
  a: T[],
  len: number,
  compareFn: (x: T, y: T) => number,
): void => {
  let k = 0;

  while (k < len) {
    let min = Math.min(k + MIN_RUN - 1, len - 1);

    insertionSort(a, k, min, compareFn);

    k += MIN_RUN;
  }

  let S = MIN_RUN;

  while (S < len) {
    let L = 0;

    for (; L < len; L += 2 * S) {
      let M = L + S - 1;
      let R = Math.min(L + 2 * S - 1, len - 1);

      if (M < R) merge(a, L, M, R, compareFn);
    }

    S *= 2;
  }

  return;
};

export { timSort };
