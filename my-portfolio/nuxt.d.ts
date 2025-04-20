// nuxt.d.ts
import { VueI18nTranslation } from "vue-i18n";

declare module "#app" {
  interface NuxtApp extends VueI18nTranslation {}
}

declare module "vue" {
  interface ComponentCustomProperties extends VueI18nTranslation {}
}
