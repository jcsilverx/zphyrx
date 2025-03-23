import { bench } from "vitest";

import * as _ from "@zphyrx/fp-core";

describe("setDataIndex method", (): void => {
  let characters = ["alice", "kaiser", "raizel", "sera", "zephyr"];

  bench("benchmark", (): void => {
    _.setDataIndex(characters, "alice");
  });
});

// const diff = <T>(
//   s: ReadonlySet<T>,
//   other: ReadonlySet<T>,
//   compareFn?: (x: T, y: T) => boolean,
// ) => {
//   const compare: (x: T, y: T) => boolean = (x, y): boolean =>
//     compareFn ? compareFn(x, y) : x === y;

//   let D: (T | symbol)[] = Array.from(s);

//   let keysItr = other.keys();
//   let E: IteratorResult<T>;

//   while (!(E = keysItr.next()).done) {
//     let e = _.canonicalizeKeyedCollectionKey(E.value);

//     // _.setDataIndex(D, e, compare);
//     _.setDataIndex(D, e, compare);
//     // let valueIndex = _.setDataIndex(D, e);
//     // _.setDataIndex(D, e);

//     // if (_.setDataIndex(D, e, compare)) {}
//   }
// };
