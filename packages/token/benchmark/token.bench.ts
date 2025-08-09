import { bench } from "vitest";
import * as Zphyrx from "../src/index";

describe("bench - #1", (): void => {
  let token = new Zphyrx.Token();
  let len = 3 + Math.floor(Math.random() * 9);

  bench("random token", (): void => {
    token.random(len);
  });

  bench("deterministic token", (): void => {
    token.deterministic(".button-cls", len);
  });
});
