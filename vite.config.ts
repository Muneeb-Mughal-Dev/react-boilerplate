import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: "@src/",
          replacement: path.resolve(process.cwd(), "src") + "/",
        },
      ],
    },
  };
});
