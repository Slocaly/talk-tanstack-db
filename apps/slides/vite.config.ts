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
      // buildStart runs for both `slidev dev` (serve) and `slidev build`.
      // Copying into public/images (rather than dist/images via closeBundle)
      // means the dev server's publicDir also serves them, and Vite's build
      // step copies public/ into dist/ on its own.
      buildStart() {
        cpSync(
          resolve(
            __dirname,
            "../../packages/slidev-theme-comics/public/images",
          ),
          resolve(__dirname, "public/images"),
          { recursive: true },
        );
      },
    },
  ],
};
