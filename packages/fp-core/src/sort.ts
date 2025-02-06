const MIN_RUN = 32;

const timSort = <T>(
  A: readonly T[],
  compareFn: (a: T, b: T) => number,
): T[] => {
  let len = A.length >>> 0;
  let k = 0;

  let R: T[] = A as T[];

  while (k < len) {
    let min = Math.min(k + MIN_RUN - 1, len - 1);

    insertionSort(R, k, min, compareFn);

    k += MIN_RUN;
  }

  let s = MIN_RUN;

  while (s < len) {
    let l = 0;

    for (; l < len; l += 2 * s) {
      let m = l + s - 1;
      let r = Math.min(l + 2 * s - 1, len - 1);

      if (m < r) merge(R, l, m, r, compareFn);
    }

    s *= 2;
  }

  return R;
};

const insertionSort = <T>(
  A: T[],
  left: number,
  right: number,
  compareFn: (a: T, b: T) => number,
): void => {
  let i = left + 1;

  while (i <= right) {
    let iA = A[i] as T;
    let j = i - 1;

    for (; j >= left && compareFn(A[j] as T, iA) > 0; j--) {
      let jA = A[j] as T;

      A[j + 1] = jA;
    }

    A[j + 1] = iA;

    i++;
  }

  return;
};

const merge = <T>(
  A: T[],
  left: number,
  mid: number,
  right: number,
  compareFn: (a: T, b: T) => number,
): void => {
  let l: T[] = A.slice(left, mid + 1);
  let r: T[] = A.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  let L1 = l.length >>> 0;
  let L2 = r.length >>> 0;

  while (i < L1 && j < L2) {
    let iA = l[i] as T;
    let jA = r[j] as T;

    if (compareFn(iA, jA) <= 0) {
      A[k] = iA;

      i++;
    } else {
      A[k] = jA;

      j++;
    }

    k++;
  }

  while (i < L1) {
    let iA = l[i] as T;

    A[k] = iA;

    i++;

    k++;
  }

  while (j < L2) {
    let jA = r[j] as T;

    A[k] = jA;

    j++;

    k++;
  }

  return;
};

export { MIN_RUN, timSort, insertionSort, merge };
