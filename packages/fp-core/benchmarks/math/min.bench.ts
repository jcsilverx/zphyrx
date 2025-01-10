import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("min method", (): void => {
  bench("benchmark with small set of numbers", (): void => {
    _.min(2, 3, 1);
  });
});
