import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  setupFiles: ["dotenv/config"],
};
export default config;
