// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxtjs/seo", "@nuxt/image"],
  ssr: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700;800&display=swap",
        },
      ],
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.js",
  },
  runtimeConfig: {
    public: {
      siteUrl: "https://yourname.dev",
      siteName: "Ala Ahmed — Full Stack JS Developer",
      siteDescription:
        "Full Stack JavaScript developer specializing in Nuxt.js, Express.js, PostgreSQL & MongoDB. Based in Tunis, Tunisia.",
      twitterHandle: "@yourhandle",
    },
  },
  // ── Nitro (static generation) ─────────────────────────────────
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});
