<template>
  <ContentsFrame
    :is-all-page-visited="page.isAllVisited"
    pageTitle="ホーム"
    subTitle="私のポートフォリオへようこそ！"
    is-home
  >
    <!-- ページ周回達成率 -->
    <v-row class="page-achieve">
      <v-col>
        <div class="d-flex justify-end align-center">
          <v-progress-linear
            color="primary"
            :model-value="page.achieveRatePercentage"
          ></v-progress-linear>
          <div class="ms-4 text-h6">{{ page.achieveRateDisplay }}</div>
          <div class="ms-4 text-h6" v-if="page.isAllVisited">
            <v-icon color="success">mdi-star-circle</v-icon>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- 各ページのカード -->
    <v-row>
      <v-col
        cols="12"
        lg="4"
        md="6"
        sm="6"
        v-for="(page, index) in page.pages"
        :key="index"
      >
        <v-card @click="goToPage(page.to)">
          <div v-if="page.visited" class="complete-icon">
            <v-icon>$complete</v-icon>
          </div>
          <v-card-title>{{ page.title }}</v-card-title>
          <v-card-actions
            ><v-btn :variant="btnVariant(index)" :to="page.to"
              >表示</v-btn
            ></v-card-actions
          >
        </v-card>
      </v-col>
    </v-row>

    <!-- お名前を聞くダイアログ -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title
          >ようこそ！<br />あなたの「あだ名」を教えてください</v-card-title
        >

        <v-form ref="form" v-model="formIsValid" @submit.prevent="onSubmit">
          <v-card-text>
            <v-text-field
              v-model="name"
              label="あだ名"
              outlined
              clearable
              :rules="nameRules"
              maxlength="10"
              counter
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn class="mr-1" @click="cancelBtn" color="primary">
              いやかも、、、
            </v-btn>
            <v-btn
              :disabled="!formIsValid"
              type="submit"
              variant="flat"
              color="primary"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>

    <!-- 見てくれてありがとうスナックバー -->
    <v-snackbar
      variant="tonal"
      location="top right"
      :timeout="snackbarTimeout"
      v-model="isSnackbarVisible"
    >
      <h2 class="d-flex align-center pa-1">
        <v-icon color="primary" class="mr-2">mdi-trophy-award</v-icon>
        <div>{{ "実績：全部見た人" }}</div>
      </h2>
    </v-snackbar>
  </ContentsFrame>
</template>

<script setup lang="ts">
import ContentsFrame from "@/components/WireFrames/ContentsFrame.vue";
import { useVisiterStore } from "@/stores/visiter";
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";

/**-------ストアのインスタンス化------- */

// ページの達成率に関するストア
const page = usePageStore();
const { isAllVisited } = storeToRefs(page);

// 訪問者に関するストア
const visiter = useVisiterStore();

/**--------最初のダイアログ------------*/
const dialog = ref(false);
const name = ref("さすらいの訪問者"); // あだ名

// あだ名のバリデーション
const formIsValid = ref(false);
const nameRules = [
  (v: string) => (!!v && v.trim().length > 0) || "空白だけはNGです",
  (v: string) => v.length <= 10 || "10文字以内にしてください",
];

const onSubmit = () => {
  // v-formのバリデーションを手動チェック（submit前に念のため）
  const isValid = formIsValid.value;
  if (isValid) {
    okBtn();
  }
};

// okボタンを押した時の処理
const okBtn = () => {
  // あだ名をストアに保存
  visiter.setYourName(name.value);
  // ダイアログを閉じる
  dialog.value = false;
  // ダイアログを表示済みにする
  visiter.setNicknameDialogAlreadyShown();
};

// いやかも、、、ボタンを押した時の処理
const cancelBtn = () => {
  // あだ名をデフォルトに戻す
  name.value = "さすらいの訪問者";
  // あだ名をストアに保存
  visiter.setYourName(name.value);
  // ダイアログを閉じる
  dialog.value = false;
  // ダイアログを表示済みにする
  visiter.setNicknameDialogAlreadyShown();
};

/**----------ルーティングする関数------------ */
const router = useRouter();
const goToPage = (to: string) => {
  router.push(to);
};

/**--------ページ情報の定義---------- */

// ボタンのバリアントを決定する関数
const btnVariant = computed(() => (index: number) => {
  return page.pages[index].visited ? "outlined" : "flat";
});

/**--------実績のスナックバー---------- */
const isSnackbarVisible = ref(false); // スナックバーの表示状態
const snackbarTimeout = ref(5000); // スナックバーの表示時間

// 全部見たら表示
onMounted(() => {
  if (isAllVisited.value && !visiter.getIsSnackbarAlreadyShown) {
    isSnackbarVisible.value = true;
    visiter.setSnackbarAlreadyShown();
  }
});
/**-------遷移時の処理------------- */
onMounted(() => {
  // 初訪問の場合はダイアログを表示
  if (!visiter.getIsNicknameDialogAlreadyShown) {
    // ダイアログを表示
    dialog.value = true;
  }
});
</script>

<style lang="scss" scoped>
.page-achieve {
  margin-bottom: 0.5rem;
}
// ページ周回達成率title
.page-achieve-title {
  font-weight: bold;
  color: rgb(var(--v-theme-onSurface));
}

// 達成率バー
.v-progress-linear {
  width: 50%;
}
// カードコンポーネント
.v-card {
  transition: transform 0.3s ease, background-color 0.3s ease;
  background-color: rgb(var(--v-theme-surfaceContainerHighest));
  position: relative;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }

  // コンプリートアイコン
  .complete-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1rem;
    color: rgb(var(--v-theme-tertiary));
  }
}
// カードコンポーネントのタイトル
.v-card-title {
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(var(--v-theme-onSurface));
}

// 名前部分のスタイル
.your-name {
  color: rgb(var(--v-theme-primary));
}
</style>
