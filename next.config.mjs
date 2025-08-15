import { createJiti } from "jiti";
import { fileURLToPath } from "node:url";

// https://env.t3.gg/docs/nextjs#validate-schema-on-build-(recommended)
const jiti = createJiti(fileURLToPath(import.meta.url));
void (async () => {
  await jiti.import("./src/library/environment/client");
  await jiti.import("./src/library/environment/server");
})();

const next_config = {};

export default next_config;
