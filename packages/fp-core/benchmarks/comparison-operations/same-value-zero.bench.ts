import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("sameValueZero method", (): void => {
  bench("benchmark 1", (): void => {
    _.sameValueZero(-0, 0);
  });
});
