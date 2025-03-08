/**
 * The `_tagTester_` method checks if the value matches the specified
 * tag name.
 *
 * @since 0.0.14
 *
 * @param value - The value to check the type of.
 * @param tagName - The expected type of the value.
 * @returns True if the value is of the expected type, false otherwise.
 */
const tagTester = (value: unknown, tagName: string): boolean =>
  Object.prototype.toString.call(value) === `[object ${tagName}]`;

export { tagTester };
