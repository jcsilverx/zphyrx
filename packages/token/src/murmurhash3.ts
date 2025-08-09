class MurmurHash3 {
  private seed: number;
  private readonly c1 = 0xcc9e2d51;
  private readonly c2 = 0x1b873593;

  constructor(seed = 0) {
    this.seed = seed >>> 0;
  }

  private rotl(value: number, count: number): number {
    return (value << count) | (value >>> (32 - count));
  }

  private fmix(h: number): number {
    h ^= h >>> 16;
    h = Math.imul(h, 0x85ebca6b) >>> 0;
    h ^= h >>> 13;
    h = Math.imul(h, 0xc2b2ae35) >>> 0;
    h ^= h >>> 16;
    return h >>> 0;
  }

  hash(key: string): number {
    const keyLen = key.length;
    let h1 = this.seed;

    let i = 0;
    while (i + 3 < keyLen) {
      let k1 =
        (key.charCodeAt(i) |
          (key.charCodeAt(i + 1) << 8) |
          (key.charCodeAt(i + 2) << 16) |
          (key.charCodeAt(i + 3) << 24)) >>>
        0;
      i += 4;

      k1 = Math.imul(k1, this.c1) >>> 0;
      k1 = this.rotl(k1, 15) >>> 0;
      k1 = Math.imul(k1, this.c2) >>> 0;

      h1 ^= k1;
      h1 = this.rotl(h1, 13) >>> 0;
      h1 = (Math.imul(h1, 5) + 0xe6546b64) >>> 0;
    }

    let k1 = 0;
    const rem = keyLen - i;
    if (rem === 3) {
      k1 ^= key.charCodeAt(i + 2) << 16;
      k1 ^= key.charCodeAt(i + 1) << 8;
      k1 ^= key.charCodeAt(i);
    } else if (rem === 2) {
      k1 ^= key.charCodeAt(i + 1) << 8;
      k1 ^= key.charCodeAt(i);
    } else if (rem === 1) {
      k1 ^= key.charCodeAt(i);
    }

    if (rem > 0) {
      k1 = Math.imul(k1, this.c1) >>> 0;
      k1 = this.rotl(k1, 15) >>> 0;
      k1 = Math.imul(k1, this.c2) >>> 0;
      h1 ^= k1;
    }

    h1 ^= keyLen;
    h1 = this.fmix(h1);

    return h1 >>> 0;
  }

  static hash(key: string, seed = 0): number {
    return new MurmurHash3(seed).hash(key);
  }
}

export { MurmurHash3 };
