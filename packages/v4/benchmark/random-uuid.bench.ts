import { bench } from "vitest";

import { randomUUID } from "../src/index";

describe("randomUUID", (): void => {
  bench("bench - #1", (): void => {
    randomUUID();
  });
});
