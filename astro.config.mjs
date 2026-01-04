import { defineConfig } from 'astro/config';

export default defineConfig({
    integrations: [],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "/src/styles/variables.scss" as *;`                }
            }
        }
    }
});