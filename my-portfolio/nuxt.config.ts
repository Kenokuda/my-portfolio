// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,

  app: {
    baseURL: "/my-portfolio/", // GitHub Pages のサブパスに合わせる
  },

  // github pages deployment
  nitro: {
    preset: "static",
  },

  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false,
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },

  css: ["~/styles/index.scss"],
  modules: [
    "@nuxt/fonts",
    "vuetify-nuxt-module",
    "@nuxt/eslint",
    "@nuxtjs/i18n",
  ],

  vuetify: {
    moduleOptions: {
      // check https://nuxt.vuetifyjs.com/guide/server-side-rendering.html
      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: false,
        prefersColorScheme: false,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
      },

      i18n: {
        locales: [
          {
            code: "en",
            name: "English",
            file: "en.ts",
          },
          {
            code: "ja",
            name: "日本語",
            file: "ja.ts",
          },
        ],
        lazy: true,
        langDir: "locales",
        defaultLocale: "ja",
      },

      // /* If customizing sass global variables ($utilities, $reset, $color-pack, $body-font-family, etc) */
      // disableVuetifyStyles: true,
      styles: {
        configFile: "assets/settings.scss",
      },
    },
  },
});
