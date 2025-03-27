import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

type Mix = string | number;

describe("mapDataHas method", (): void => {
  let god: Map<string, Mix> = new Map<string, Mix>([
    ["name", "kaiser"],
    ["rank", 1],
    ["race", "god"],
    ["age", 1_000_000],
  ]);

  bench("bench - #1", (): void => {
    _.mapDataHas(god, "race");
  });
});
