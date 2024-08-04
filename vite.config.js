import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase", // Optional: Converts class names to camelCase
      generateScopedName: "[name]__[local]___[hash:base64:5]", // Optional: Customizes the generated class names
    },
  },
});
