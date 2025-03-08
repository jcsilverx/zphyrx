import { bench } from "vitest";

import { timSort } from "@zphyrx/fp-core";

describe("timSort method", (): void => {
  let a: number[] = [5, 3, 1, 4, 2];
  let len = a.length >>> 0;
  const compare = (x: number, y: number): number => x - y;

  bench("bench - 1", (): void => {
    timSort(a, len, compare);
  });
});
