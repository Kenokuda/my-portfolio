import { defineStore } from "pinia";

export const useProgressStore = defineStore("progress", {
  state: () => ({
    progress: 0,
  }),
  actions: {
    setProgress(value: number) {
      this.progress = value;
    },
  },
});
