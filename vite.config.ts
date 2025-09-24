import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // For GitHub Pages: set base to repo name when deploying to a project page
  // If deploying to user/organization page (username.github.io), base should be "/"
  base: process.env.GITHUB_REPOSITORY?.includes(".github.io") ? "/" : process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}/` : "/",
}));
