import * as crypto from "./native";
import { BUFSIZ } from "./constants";

class RNG {
  private buf: Uint8Array;
  private ptr: number;
  private readonly bufsize: number;

  constructor(bufsize = BUFSIZ) {
    this.bufsize = bufsize;
    this.buf = new Uint8Array(bufsize);
    this.ptr = bufsize;
  }

  private refill(): void {
    crypto.randomFillSync(this.buf);

    this.ptr = 0;
  }

  nextByte(): number {
    if (this.ptr >= this.bufsize) {
      this.refill();
    }

    return this.buf[this.ptr++];
  }
}

export { RNG };
