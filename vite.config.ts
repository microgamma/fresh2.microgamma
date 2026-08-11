import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [fresh(), tailwindcss()],
  // Dev-server only (ignored by `vite build`): lets the site run inside the
  // docker+traefik dev stack, reached at www.<slug>.microgamma.localhost.
  server: {
    host: true, // bind 0.0.0.0 so the container is reachable
    allowedHosts: [".microgamma.localhost"], // trust the dev proxy's host
    hmr: { clientPort: 80 }, // HMR ws goes back through traefik on :80
  },
});
