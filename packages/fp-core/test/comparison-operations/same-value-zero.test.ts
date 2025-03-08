import * as _ from "@zphyrx/fp-core";

describe("sameValueZero method", (): void => {
  let aelion = { rank: 1 };
  let kaiser = { rank: 1 };
  let sameAelion = aelion;

  // Case 1: evaluation result is the same as using ===
  it("should 1", (): void => {
    let output = _.sameValueZero(7, 7);

    expect(output).toBe(true);
  });

  it("should 2", (): void => {
    let output = _.sameValueZero("zephyr", "zephyr");

    expect(output).toBe(true);
  });

  it("should 3", (): void => {
    let output = _.sameValueZero("zephyr", "kaiser");

    expect(output).toBe(false);
  });

  it("should 4", (): void => {
    let output = _.sameValueZero(null, null);

    expect(output).toBe(true);
  });

  it("should 5", (): void => {
    let output = _.sameValueZero(undefined, undefined);

    expect(output).toBe(true);
  });

  it("should 6", (): void => {
    let output = _.sameValueZero([], []);

    expect(output).toBe(false);
  });

  it("should 7", (): void => {
    let output = _.sameValueZero(aelion, aelion);

    expect(output).toBe(true);
  });

  it("should 8", (): void => {
    let output = _.sameValueZero(aelion, kaiser);

    expect(output).toBe(false);
  });

  it("should 9", (): void => {
    let output = _.sameValueZero(aelion, sameAelion);

    expect(output).toBe(true);
  });

  // Case 2: Signed zero
  it("should 10", (): void => {
    let output = _.sameValueZero(0, -0);

    expect(output).toBe(true);
  });

  it("should 11", (): void => {
    let output = _.sameValueZero(+0, -0);

    expect(output).toBe(true);
  });

  // Case 3: NaN
  it("should 12", (): void => {
    let output = _.sameValueZero(NaN, 0 / 0);

    expect(output).toBe(true);
  });

  it("should 13", (): void => {
    let output = _.sameValueZero(NaN, Number.NaN);

    expect(output).toBe(true);
  });
});
