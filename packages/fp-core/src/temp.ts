import { timSort } from "./sort";

type Next<T> = IteratorResult<T, undefined>;

type Ordering = 1 | 0 | -1;

type Ord<A> = {
  readonly compare: (x: A, y: A) => Ordering;
};

const fromCompare = <A>(compare: Ord<A>["compare"]): Ord<A> => ({
  compare: (x, y) => (x === y ? 0 : compare(x, y)),
});

export { fromCompare };
export type { Ord, Ordering };

const sorted = <T>(a: readonly T[], compareFn?: (x: T, y: T) => number) => {
  let len = a.length >>> 0;

  if (compareFn !== undefined && typeof compareFn !== "function") {
    throw new TypeError("`Compare` must be a callback function");
  }

  let R: T[] = new Array<T>(len);

  const sortCompare = (x: T, y: T): number => compare(x, y, compareFn);

  let sortedList = sortIndexedProperties(
    a,
    len,
    sortCompare,
    "read-through-holes",
  );

  let j = 0;

  while (j < len) {
    let E = sortedList[j];

    R[j] = E;

    j++;
  }

  return R;
};

const sortIndexedProperties = <T>(
  a: readonly T[],
  len: number,
  sortCompare: (x: T, y: T) => number,
  holes: "skip-holes" | "read-through-holes",
): T[] => {
  if (typeof sortCompare !== "function") {
    throw new TypeError("'SortCompare' must be a callback function");
  }

  let items: T[] = [];
  let k = 0;
  let to = 0;

  while (k < len) {
    let E = a[k];

    let kRead = false;

    if (holes === "skip-holes") {
      kRead = k in a;
    } else {
      kRead = true;
    }

    if (kRead) {
      items[to] = E;

      to++;
    }

    k++;
  }

  let newLen = items.length;

  timSort(items, newLen, sortCompare);

  return items;
};

const compare = <T>(
  x: T,
  y: T,
  sortCompare?: (x: T, y: T) => number,
): number => {
  if (x === undefined && y === undefined) {
    return 0;
  }

  if (x == null) {
    return 1;
  }

  if (y == null) {
    return -1;
  }

  if (sortCompare !== undefined) {
    let v = sortCompare(x, y);

    if (Number.isNaN(v)) {
      return 0;
    }

    return v;
  }

  return x < y ? -1 : x > y ? 1 : 0;
};

type CallbackFn<T, U> = (value: T, index: number) => U;

const _values = (<T extends U, K, U = T>(
  m: ReadonlyMap<K, T>,
  callbackFn?: CallbackFn<T, U>,
): Array<U> => {
  let size = m.size >>> 0;

  if (callbackFn !== undefined && typeof callbackFn !== "function") {
    throw new TypeError("Callback must be a function");
  }

  let R: Array<U> = new Array<U>(size);

  let valuesIter = m.values();
  let k = 0;

  let E: Next<T>;

  while (!(E = valuesIter.next()).done) {
    if (k >= Number.MAX_SAFE_INTEGER) {
      throw new TypeError("Exceeds maximum allowed length");
    }

    R[k] = callbackFn ? callbackFn(E.value, k) : E.value;

    k++;
  }

  return R;
}) as {
  <T, K>(m: ReadonlyMap<K, T>): Array<T>;
  <T extends U, K, U = T>(
    m: ReadonlyMap<K, T>,
    callbackFn: CallbackFn<T, U>,
  ): Array<U>;
};

const values =
  <A>(compareFn: (x: A, y: A) => Ordering) =>
  <K>(m: ReadonlyMap<K, A>): Array<A> =>
    sorted(_values(m), compareFn);

export { values };
