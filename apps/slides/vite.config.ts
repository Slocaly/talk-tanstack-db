import { cpSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default {
  server: {
    allowedHosts: ["tanstack-db.laudart.dev"],
    // Without this, Vite's HMR client (which Slidev reuses to broadcast
    // slide-navigation updates to every connected viewer) guesses the
    // websocket endpoint from the page's own host/port. Behind the
    // Cloudflare Tunnel the browser is on https://tanstack-db.laudart.dev
    // (port 443) while Vite actually listens on 3030, so that guess is
    // wrong and only the client driving the change (which applies it
    // locally before the round trip) ever sees slide changes.
    hmr: {
      protocol: "wss",
      host: "tanstack-db.laudart.dev",
      clientPort: 443
    }
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
