// stores/usePageStore.ts
import { defineStore } from "pinia";
import { pagePath } from "~/constants/path";

export const usePageStore = defineStore(
  "page",
  () => {
    /** state */
    const pages = ref([
      { title: "私について", to: pagePath.ABOUT, visited: false },
      { title: "技術", to: pagePath.SKILLS, visited: false },
      { title: "作品", to: pagePath.WORKS, visited: false },
      { title: "ブログ", to: pagePath.BLOG, visited: false },
      { title: "連絡", to: pagePath.CONTACT, visited: false },
    ]);

    /** getters */
    const visitedPages = computed(
      () => pages.value.filter((p) => p.visited).length
    );
    const totalPages = computed(() => pages.value.length);
    const achieveRate = computed(() => visitedPages.value / totalPages.value);
    const achieveRatePercentage = computed(() => achieveRate.value * 100);
    const achieveRateDisplay = computed(
      () => `${visitedPages.value} / ${totalPages.value}`
    );
    const isAllVisited = computed(
      () => visitedPages.value === totalPages.value
    );

    /** actions */
    // ページを訪問済みにする
    const markVisited = (title: string) => {
      const page = pages.value.find((p) => p.title === title);
      if (page && !page.visited) {
        page.visited = true;
      }
    };

    return {
      /** state */
      pages,
      /** getters */
      visitedPages,
      totalPages,
      achieveRate,
      achieveRatePercentage,
      achieveRateDisplay,
      isAllVisited,
      /** actions */
      markVisited,
    };
  },
  {
    /** persist */
    persist: {
      storage: sessionStorage,
    },
  }
);
