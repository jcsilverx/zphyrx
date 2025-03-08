import * as _ from "@zphyrx/fp-core";

describe("shift method", (): void => {
  it("should - 1", (): void => {
    let output = adjust(1.005, 2);

    expect(output).toBe(1.01);
  });

  it("should - 2", (): void => {
    let output = adjust(1.0049, 2);

    expect(output).toBe(1.0);
  });

  it("should - 3", (): void => {
    let output = adjust(987.654, -1000);

    expect(output).toBe(0);
  });

  it("should - 4", (): void => {
    let output = adjust(1.01, -1000);

    expect(output).toBe(0);
  });

  it("should - 5", (): void => {
    let output = adjust(1.01, -324);

    expect(output).toBe(0);
  });
});

describe("adjust method", (): void => {
  it("should - 1", (): void => {
    let output = adjust(4.006);

    expect(output).toBe(4);
  });

  it("should - 2", (): void => {
    let output = adjust(1234.56, -2);

    expect(output).toBe(1200);
  });

  it("should - 3", (): void => {
    let output = adjust(1234.56, 1, Math.floor);

    expect(output).toBe(1234.5);
  });

  it("should - 4", (): void => {
    let output = adjust(1234.54, 1, Math.ceil);

    expect(output).toBe(1234.6);
  });
});

const adjust = (
  x: number,
  precision?: number,
  f: (x: number) => number = Math.round,
) => {
  let fname = f.name;

  if (fname !== "round" && fname !== "floor" && fname !== "ceil") {
    throw new TypeError(
      "f(x) for the decimal adjustment must be one of `round`, `floor`, or `ceil`",
    );
  }

  let P = precision == null ? 0 : Math.min(precision, 292);

  if (precision && Number.isFinite(x)) {
    return _.shift(f(_.shift(x, P)), -P);
  }

  return f(x);
};

// return shiftNumber(f(shiftNumber(x, P)), -P);
// it("should - 6", (): void => {
//   let output = adjust(1.005, 2);

//   console.log(output); // => 1
//   // expect(output).toBe(1.01);
// });

// it("should - 7", (): void => {
//   let output = adjust(1.0049, 2);

//   console.log(output); // => 1
//   // expect(output).toBe(1.0);
// });
