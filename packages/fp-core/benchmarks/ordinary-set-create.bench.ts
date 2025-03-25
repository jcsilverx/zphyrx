import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("setDataIndex method", (): void => {
  let characters = [
    "alice",
    "josephine",
    _.EMPTY,
    "kaiser",
    "raizel",
    Symbol("sera"),
    "zephyr",
  ];

  bench("benchmark", (): void => {
    _.ordinaryArrayCreate(characters);
  });
});
