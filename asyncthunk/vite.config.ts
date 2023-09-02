// import { defineConfig } from "vitest/config"
// import react from "@vitejs/plugin-react"


// export default defineConfig({
//   plugins: [react()],
//   server: {
//     open: true,
//   },
//   build: {
//     outDir: "build",
//     sourcemap: true,
//   },
//   test: {
//     globals: true,
//     environment: "jsdom",
//     setupFiles: "src/setupTests",
//     mockReset: true,
//   },
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
