import { RNG } from "@zphyrx/rng-rc1";
import { ALPHABET, BASE } from "./constants";
import { MurmurHash3 } from "./murmurhash3";

class Token {
  private rng: RNG = new RNG();

  constructor() {}

  random(length: number): string {
    let result = "";

    for (let i = 0; i < length; ++i) {
      result += ALPHABET[this.rng.nextByte() % BASE];
    }

    return result;
  }

  deterministic(input: string, length: number): string {
    let hash = MurmurHash3.hash(input, 0);

    return Token.toBase62(hash).padStart(length, "0").slice(-length);
  }

  private static toBase62(input: number | Uint8Array): string {
    let result = "";

    if (typeof input === "number") {
      let num = input;

      if (num === 0) {
        return "0";
      }

      while (num > 0) {
        result = ALPHABET[num % BASE] + result;
        num = Math.floor(num / BASE);
      }
    } else {
      for (const byte of input) {
        result += ALPHABET[byte % BASE];
      }
    }

    return result;
  }
}

export { Token };
