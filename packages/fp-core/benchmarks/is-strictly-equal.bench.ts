import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("isStrictlyEqual method", (): void => {
  let x = 7;
  let y = 8;

  bench("bench - #1", (): void => {
    _.isStrictlyEqual(x, y);
  });
});
