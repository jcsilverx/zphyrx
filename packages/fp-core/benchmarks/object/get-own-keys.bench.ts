import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

type Character = {
  name: string;
  race: "god";
  age: number;
  rank: 1;
};

describe("getOwnKeys method", (): void => {
  let god: Character = {
    name: "kaiser",
    race: "god",
    age: 1_000_000,
    rank: 1,
  };

  bench("benchmark with small `Record`", (): void => {
    _.getOwnKeys(god);
  });
});
