/**
 * @since 0.0.14
 */
const insertionSort = <T>(
  a: T[],
  left: number,
  right: number,
  compareFn: (x: T, y: T) => number,
): void => {
  let i = left + 1;

  while (i <= right) {
    let iE = a[i] as T;
    let j = i - 1;

    for (; j >= left && compareFn(a[j] as T, iE) > 0; j--) {
      let jE = a[j] as T;

      a[j + 1] = jE;
    }

    a[j + 1] = iE;

    i++;
  }

  return;
};

export { insertionSort };
