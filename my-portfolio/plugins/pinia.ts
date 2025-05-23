// plugins/pinia.ts
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  nuxtApp.vueApp.use(pinia);
  nuxtApp.provide("pinia", pinia);
});
