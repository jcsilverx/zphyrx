import * as _ from "@zphyrx/fp-core";

describe("keys method", (): void => {
  it("should return indices as string keys for a basic array", (): void => {
    let output = _.keys(["a", "b", "c"]);

    expect(output).toEqual(["0", "1", "2"]);
  });

  it("should return keys of an array-like object with sequential indices", (): void => {
    let output = _.keys({
      0: "a",
      1: "b",
      2: "c",
    });

    expect(output).toEqual(["0", "1", "2"]);
  });

  it("should return keys of an array-like object with non-sequential indices in sorted order", (): void => {
    let output = _.keys({
      100: "a",
      2: "b",
      7: "c",
    });

    expect(output).toEqual(["2", "7", "100"]);
  });
});
