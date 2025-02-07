const split = (
  S: string,
  splitter: {
    [Symbol.split](string: string, limit?: number): string[];
  },
  limit?: number,
): string[] => S.split(splitter, limit);

export { split };
