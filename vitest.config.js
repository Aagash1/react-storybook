import { defineConfig } from "vitest/config";
export default defineConfig({
    test: {
        environment: "jsdom",          
        setupFiles: "./setUpTests.js", 
        globals: true,                    
      },
})