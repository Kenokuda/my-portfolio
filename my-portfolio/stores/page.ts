// stores/usePageStore.ts
import { defineStore } from "pinia";

export const usePageStore = defineStore(
  "page",
  () => {
    /** state */
    const pages = ref([
      { title: "私について", to: "/about", visited: false },
      { title: "技術", to: "/skills", visited: false },
      { title: "作品", to: "/works", visited: false },
      { title: "ブログ", to: "/blog", visited: false },
      { title: "連絡", to: "/contact", visited: false },
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
    const markVisited = (title: string) => {
      const page = pages.value.find((p) => p.title === title);
      if (page && !page.visited) {
        page.visited = true;
      }
    };

    return {
      pages,
      visitedPages,
      totalPages,
      achieveRate,
      achieveRatePercentage,
      achieveRateDisplay,
      isAllVisited,
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
