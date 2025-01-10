import * as _ from "@zphyrx/fp-core";

describe("min method", (): void => {
  it("should return the smallest number when all numbers are positive", (): void => {
    let output = _.min(2, 3, 1);

    expect(output).toBe(1);
  });

  it("should return the smallest number when all numbers are negative", (): void => {
    let output = _.min(-2, -3, -1);

    expect(output).toBe(-3);
  });

  it("should return the smallest number when one is negative and one is positive", (): void => {
    let output = _.min(10, -20);

    expect(output).toBe(-20);
  });
});
