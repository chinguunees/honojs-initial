import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/foods.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: "c8cb003b5669b9f1a8f3e53080a0211f",
    databaseId: "5bdb57ec-e1a3-452b-8bde-680997521363",
    token: "riEfrqidG_acD8si3m-7hPorWRIqmabe3ncPoM2C",
  },
});
