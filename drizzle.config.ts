import { env } from "@/library/environment/server";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN
  },
  out: "./src/database/migrations/",
  schema: "./src/database/schema/*.ts",
  strict: true,
  verbose: true
});
