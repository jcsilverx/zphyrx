import { bench } from "vitest";

import { memocpy } from "../src/memcpy";

describe("memocpy", (): void => {
  let dst = new Uint8Array(10);
  let src = new Uint8Array([1, 2, 3, 4, 5]);

  bench("bench - #1", (): void => {
    memocpy(dst, src, 2, 3);
  });
});
