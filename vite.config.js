import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 👇 importante: usa el nombre exacto de tu repo
export default defineConfig({
  plugins: [react()],
  base: "/Misfits-Company/",
});
