import * as _ from "@zphyrx/fp-core";

describe("tagTester method", (): void => {
  it("should return true for an array when tagName is `Array`", (): void => {
    let output = _.tagTester([], "Array");

    expect(output).toBe(true);
  });

  it("should return true for an object when tagName is `Object`", (): void => {
    let output = _.tagTester({}, "Object");

    expect(output).toBe(true);
  });

  it("should return true for a string when tagName is `String`", (): void => {
    let output = _.tagTester("zphyrx", "String");

    expect(output).toBe(true);
  });

  it("should return true for a number when tagName is `Number`", (): void => {
    let output = _.tagTester(7, "Number");

    expect(output).toBe(true);
  });

  it("should return false for an object when tagName is `Array`", (): void => {
    let output = _.tagTester({}, "Array");

    expect(output).toBe(false);
  });

  it("should return false for an array when tagName is `Object`", (): void => {
    let output = _.tagTester([], "Object");

    expect(output).toBe(false);
  });

  it("should return false for a number when tagName is `String`", (): void => {
    let output = _.tagTester(7, "String");

    expect(output).toBe(false);
  });

  it("should return false for a string when tagName is `Number`", (): void => {
    let output = _.tagTester("zphyrx", "Number");

    expect(output).toBe(false);
  });

  it("should return false for null when tagName is `Object`", (): void => {
    let output = _.tagTester(null, "Object");

    expect(output).toBe(false);
  });

  it("should return false for undefined when tagName is `Object`", (): void => {
    let output = _.tagTester(undefined, "Object");

    expect(output).toBe(false);
  });
});
