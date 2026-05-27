// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "nuxt-studio"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  studio: {
    repository: {
      provider: "github",
      owner: "dasturchioka",
      repo: "your-repo",
      branch: "main",
    },
  },
});
