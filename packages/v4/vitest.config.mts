import * as vitest from "@zphyrx/vitest-config";

import type { ViteUserConfig } from "vitest/config";

const config: ViteUserConfig = vitest.config({
  test: {
    coverage: {
      enabled: false,
    },
  },
});

export default config;
