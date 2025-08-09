import { bench } from "vitest";
import * as Zphyrx from "../src/index";

describe("bench - #1", (): void => {
  let rng = new Zphyrx.RNG();

  bench("rng", (): void => {
    rng.nextByte();
  });
});
