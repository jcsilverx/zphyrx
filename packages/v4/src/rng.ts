import * as crypto from "./native";
import { BUFSIZ } from "./constants";

let buf = new Uint8Array(BUFSIZ);
let ptr = buf.length;

const rng = (): Uint8Array<ArrayBuffer> => {
  if (ptr > buf.length - 16) {
    crypto.randomFillSync(buf);

    ptr = 0;
  }
  return buf.slice(ptr, (ptr += 16));
};

export { rng };
