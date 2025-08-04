const memocpy = <T extends Uint8Array>(
  dst: T,
  src: T,
  o: number,
  n: number,
): void => {
  do {
    --n;

    dst[o + n] = src[n];
  } while (n !== 0);

  return;
};

export { memocpy };
