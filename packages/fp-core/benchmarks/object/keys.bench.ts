import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("keys method", (): void => {
  bench("benchmark with small object", (): void => {
    _.keys({ foo: "bar", baz: 42 });
  });
});
