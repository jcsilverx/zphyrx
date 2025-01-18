import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("tagTester method", (): void => {
  bench("benchmark with an empty array", (): void => {
    _.tagTester([], "Array");
  });
});
