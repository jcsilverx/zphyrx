import { __slice } from "../_internals";

/**
 * @since 0.0.14
 */
const merge = <T>(
  a: T[],
  left: number,
  mid: number,
  right: number,
  compareFn: (x: T, y: T) => number,
): void => {
  let n1 = mid - left + 1;
  let n2 = right - mid;

  let L: T[] = __slice(a, left, mid + 1);
  let R: T[] = __slice(a, mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < n1 && j < n2) {
    let iE = L[i] as T;
    let jE = R[j] as T;

    if (compareFn(iE, jE) <= 0) {
      a[k] = iE;

      i++;
    } else {
      a[k] = jE;

      j++;
    }

    k++;
  }

  while (i < n1) {
    let iE = L[i] as T;

    a[k] = iE;

    i++;

    k++;
  }

  while (j < n2) {
    let jE = R[j] as T;

    a[k] = jE;

    j++;

    k++;
  }

  return;
};

export { merge };
