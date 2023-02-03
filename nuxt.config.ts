// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@pinia/nuxt", "@nuxt/image-edge"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
  image: {
    domains: ["nuxtjs.org"],
  },
  imports: {
    dirs: ["composables/**", "utils/**"],
  },
  runtimeConfig: {
    public: {
      medusaBackendUrl: "",
    },
  },
  app: {
    head: {
      link: [
        { rel: "icon", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },
});
