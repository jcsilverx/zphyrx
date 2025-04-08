/**
 * @internal
 *
 * @since 0.0.50
 */
const jsonParse = JSON.parse as (
  text: string,
  reviver?: (this: unknown, key: string, value: unknown) => unknown,
) => unknown;

export { jsonParse };
