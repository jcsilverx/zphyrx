import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

type Mix = string | number;

const compare: (x: Mix, y: Mix) => boolean = (x, y): boolean => x === y;

let god: Map<string, Mix> = new Map<string, Mix>([
  ["name", "kaiser"],
  ["rank", 1],
  ["race", "god"],
  ["age", 1_000_000],
]);

describe("mapDataIndex method", (): void => {
  bench("bench - #1", (): void => {
    _.mapDataIndex(god, "race", compare);
  });
});
