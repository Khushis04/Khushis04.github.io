import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // keep "/" because your repo is Khushis04.github.io (special case)
});
