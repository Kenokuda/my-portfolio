import { defineStore } from "pinia";

export const useVisiterStore = defineStore("visiter", {
  state: () => ({
    yourName: "",
    isNicknameDialogAlreadyShown: false,
  }),
  getters: {
    // 訪問者のあだ名を取得する
    getYourName: (state) => state.yourName,
    // 訪問者のあだ名が設定済みかどうかを取得する
    getIsNicknameDialogAlreadyShown: (state) =>
      state.isNicknameDialogAlreadyShown,
  },
  actions: {
    // 訪問者のあだ名を設定する
    setYourName(name: string) {
      this.yourName = name;
    },

    // 訪問者のあだ名が設定済みかどうかを設定する
    setIsNicknameDialogAlreadyShown(isShown: boolean) {
      this.isNicknameDialogAlreadyShown = isShown;
    },
  },
  persist: {
    storage: sessionStorage,
  },
});
