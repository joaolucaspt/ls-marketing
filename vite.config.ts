import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Plain static SPA build — no server, no SSR, no Nitro/Cloudflare target.
// Output goes to dist/ as pure static files (HTML/CSS/JS), ready for any
// static host (Hostinger shared hosting, Netlify, Vercel static, etc.)
export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  build: {
    outDir: "dist",
  },
});
