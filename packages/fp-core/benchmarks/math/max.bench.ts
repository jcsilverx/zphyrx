import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("max method", (): void => {
  bench("benchmark with small set of numbers", (): void => {
    _.max(1, 3, 2);
  });
});
