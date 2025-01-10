/**
 * The `_keys_` method returns an array of all the own enumerable
 * property names of the given object.
 *
 * @param O - The object to get the keys from.
 * @returns An array of strings representing the property names.
 */
const keys = (O: object): string[] => Object.keys(O);

export { keys };
