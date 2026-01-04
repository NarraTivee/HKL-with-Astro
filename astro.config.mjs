import { defineConfig } from 'astro/config';

export default defineConfig({
    site: "https://NarraTivee.github.io",
    base: "/HKL-with-Astro/",
    integrations: [],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "/src/styles/variables.scss" as *;`
                }
            }
        }
    }
});