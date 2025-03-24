import * as zphyrx from "@zphyrx/eslint-config";

import type { FlatConfig } from "@typescript-eslint/utils/ts-eslint";

const config: FlatConfig.ConfigArray = zphyrx.config(
  {
    framework: false,
    testing: "vitest",
    prettier: true,
  },
  {
    name: "@zphyrx/eslint-config",
    rules: {
      "prefer-const": "off",
      "@typescript-eslint/array-type": "off",
    },
  },
);

export default config;
