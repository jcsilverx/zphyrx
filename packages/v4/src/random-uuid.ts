import * as crypto from "./native";
import * as Z from "./rng";
import { memocpy } from "./memcpy";
import { toUUID } from "./to-uuid";

import type { UUID, UUIDString } from "./types";

const randomUUID = (<T extends Uint8Array>(
  buf?: T,
  offset?: number,
  random?: Uint8Array,
  rng?: () => Uint8Array,
): UUID<T> => {
  let isSupported =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function";

  if (isSupported && !buf && !random && !rng) {
    return crypto.randomUUID();
  }

  if (process.env.NODE_ENV !== "production" && !isSupported) {
    console.warn(
      `v4.randomUUID(): 'crypto.randomUUID' is not available; using fallback.`,
    );
  }

  let rnd = random ?? rng?.() ?? Z.rng();

  if (rnd.length < 16) {
    throw new Error("v4.randomUUID(): random bytes must be >= 16.");
  }

  // set the 'UUID' version to 4 (random)
  rnd[6] = (rnd[6] & 0x0f) | 0x40;
  // set the 'UUID' variant to RFC 4122 (random-based)
  rnd[8] = (rnd[8] & 0x3f) | 0x80;

  if (buf) {
    offset = offset !== undefined ? Math.max(0, offset) : 0;

    if (offset < 0 || offset > 16 + buf.length) {
      throw new RangeError(
        `v4.randomUUID(): byte range ${offset}:${offset + 15} is out of buffer bounds.`,
      );
    }

    memocpy(buf, rnd, offset, 16);

    return buf;
  }

  return toUUID(rnd);
}) as RandomUUID;

type RandomUUID = {
  (): UUIDString;

  <T extends Uint8Array>(buf: T): T;
  <T extends Uint8Array>(buf: T, offset: number): T;

  <T extends Uint8Array>(buf: T, random: Uint8Array): T;
  <T extends Uint8Array>(buf: T, rng: () => Uint8Array): T;

  <T extends Uint8Array>(buf: T, offset: number, random: Uint8Array): T;
  <T extends Uint8Array>(buf: T, offset: number, rng: () => Uint8Array): T;
};

export { randomUUID };
