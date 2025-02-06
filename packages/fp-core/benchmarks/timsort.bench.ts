import { bench } from "vitest";

import * as ZT from "@zphyrx/fp-core";

describe("timSort method", (): void => {
  let A = [5, 3, 6, 8, 1, 4, 2, 7];

  bench("bench - 1", (): void => {
    ZT.timSort(A, (a, b): number => a - b);
  });
});
