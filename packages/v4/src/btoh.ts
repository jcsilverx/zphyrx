import { BUFSIZ } from "./constants";

let btoh: string[] = [];

for (let i = 0; i < BUFSIZ; ++i) {
  btoh.push((i + 0x100).toString(16).slice(1));
}

export { btoh };
