import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("shiftN method", (): void => {
  bench("bench - 1", (): void => {
    adjust(4.006);
  });

  bench("bench - 2", (): void => {
    adjust(1234.56, 1, Math.floor);
  });

  bench("bench - 3", (): void => {
    adjust(1234.56, 1, Math.floor);
  });

  bench("bench - 4", (): void => {
    _.shiftN(20, 2);
  });

  bench("bench - 5", (): void => {
    String(1234.56).split("e");
  });
});

const adjust = (
  x: number,
  precision?: number,
  f: (x: number) => number = Math.round,
) => {
  // let fname = f.name;

  // if (fname !== "round" && fname !== "floor" && fname !== "ceil") {
  //   throw new TypeError(
  //     "f(x) for the decimal adjustment must be one of `round`, `floor`, or `ceil`",
  //   );
  // }

  let P = precision == null ? 0 : Math.min(precision, 292);

  if (precision && Number.isFinite(x)) {
    return _.shiftN(f(_.shiftN(x, P)), -P);
  }

  return f(x);
};
