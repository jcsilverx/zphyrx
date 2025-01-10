import * as _ from "@zphyrx/fp-core";

describe("max method", (): void => {
  it("should return the larger number when both numbers are positive", (): void => {
    let output = _.max(10, 20);

    expect(output).toBe(20);
  });

  it("should return the larger number when both numbers are negative", (): void => {
    let output = _.max(-10, -20);

    expect(output).toBe(-10);
  });

  it("should return the larger number when one is negative and one is positive", (): void => {
    let output = _.max(-10, 20);

    expect(output).toBe(20);
  });
});
