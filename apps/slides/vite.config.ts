import { cpSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default {
  server: {
    allowedHosts: ["tanstack-db.laudart.dev"]
  },
  plugins: [
    {
      name: "copy-theme-images",
      closeBundle() {
        cpSync(
          resolve(
            __dirname,
            "../../packages/slidev-theme-comics/public/images",
          ),
          resolve(__dirname, "dist/images"),
          { recursive: true },
        );
      },
    },
  ],
};
