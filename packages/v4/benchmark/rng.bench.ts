import { bench } from "vitest";

import { rng } from "../src/rng";

describe("rng", (): void => {
  bench("bench - #1", (): void => {
    rng();
  });
});
