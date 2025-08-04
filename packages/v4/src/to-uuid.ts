import { btoh } from "./btoh";

import type { UUIDString } from "./types";

const toUUID = (a: Uint8Array, offset = 0): UUIDString =>
  (
    btoh[a[offset + 0]] +
    btoh[a[offset + 1]] +
    btoh[a[offset + 2]] +
    btoh[a[offset + 3]] +
    "-" +
    btoh[a[offset + 4]] +
    btoh[a[offset + 5]] +
    "-" +
    btoh[a[offset + 6]] +
    btoh[a[offset + 7]] +
    "-" +
    btoh[a[offset + 8]] +
    btoh[a[offset + 9]] +
    "-" +
    btoh[a[offset + 10]] +
    btoh[a[offset + 11]] +
    btoh[a[offset + 12]] +
    btoh[a[offset + 13]] +
    btoh[a[offset + 14]] +
    btoh[a[offset + 15]]
  ).toLowerCase() as UUIDString;

export { toUUID };
