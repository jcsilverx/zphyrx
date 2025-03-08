import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("sameValue method", (): void => {
  bench("benchmark 1", (): void => {
    _.sameValue(-0, 0);
  });
});
