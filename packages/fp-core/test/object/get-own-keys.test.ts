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

  it("should return indices as string keys for a basic array", (): void => {
    let output = Object.keys(["a", "b", "c"]);

    expect(output).toEqual(["0", "1", "2"]);
  });

  it("should return keys of an array-like object with sequential indices", (): void => {
    let output = _.getOwnKeys({
      0: "a",
      1: "b",
      2: "c",
    });

    expect(output).toEqual(["0", "1", "2"]);
  });

  it("should return keys of an array-like object with non-sequential indices in sorted order", (): void => {
    let output = _.getOwnKeys(god);

    expect(output).toEqual(["name", "race", "age", "rank"]);
  });
});
