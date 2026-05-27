import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/app.css'],
  modules: ["@nuxt/content", "nuxt-studio"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  studio: {
    repository: {
      provider: "github",
      owner: "dasturchioka",
      repo: "journal-dasturchioka",
      branch: "master",
    },
  },
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
    plugins: [tailwindcss()],
  },
});
