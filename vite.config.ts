/// <reference types="vitest" />

import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		testTimeout: 30000,
	},
	logLevel: "info",
	esbuild: {
		sourcemap: "both",
	},
});
