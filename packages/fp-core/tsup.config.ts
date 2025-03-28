import * as tsup from "@zphyrx/tsup-config";

import type { TsupUserConfig } from "@zphyrx/tsup-config";

const config: TsupUserConfig = tsup.config({
  entry: ["src/index.ts"],
  dts: true,
  sourcemap: true,
  //
  pure: ["Symbol"],
  treeshake: {
    preset: "smallest",
    propertyReadSideEffects: false,
    moduleSideEffects: false,
  },
});

export default config;
