import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useVisiterStore = defineStore(
  "visiter",
  () => {
    // --- state ---
    const yourName = ref("さすらいの訪問者");
    const isNicknameDialogAlreadyShown = ref(false);
    const isSnackbarAlreadyShown = ref(false);

    // --- getters (computed) ---
    const getYourName = computed(() => yourName.value);
    const getIsNicknameDialogAlreadyShown = computed(
      () => isNicknameDialogAlreadyShown.value
    );
    const getIsSnackbarAlreadyShown = computed(
      () => isSnackbarAlreadyShown.value
    );

    // --- actions ---
    const setYourName = (name: string) => {
      yourName.value = name;
    };

    const setNicknameDialogAlreadyShown = () => {
      isNicknameDialogAlreadyShown.value = true;
    };

    const setSnackbarAlreadyShown = () => {
      isSnackbarAlreadyShown.value = true;
    };

    return {
      yourName,
      isNicknameDialogAlreadyShown,
      isSnackbarAlreadyShown,
      getYourName,
      getIsNicknameDialogAlreadyShown,
      getIsSnackbarAlreadyShown,
      setYourName,
      setNicknameDialogAlreadyShown,
      setSnackbarAlreadyShown,
    };
  },
  {
    /** persist */
    persist: {
      storage: sessionStorage,
    },
  }
);
