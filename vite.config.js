import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 🧠 Asegúrate de reemplazar 'Misfits-Company' por el nombre exacto de tu repo en GitHub
export default defineConfig({
  plugins: [react()],
  base: "/Misfits-Company/",
});
