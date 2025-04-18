<template>
  <ContentsFrame
    :is-all-page-visited="allPagesVisited"
    :your-name="getYourName"
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
            :model-value="calculateAchieveRate"
          ></v-progress-linear>
          <div class="ms-4 text-h6">{{ showAchieveRate }}</div>
          <div class="ms-4 text-h6" v-if="allPagesVisited">
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
        sm="12"
        v-for="(page, index) in pages"
        :key="index"
      >
        <v-card @click="goToPage(page.to)">
          <div v-if="page.visited" class="complete-icon">
            <v-icon>$complete</v-icon>
          </div>
          <v-card-title>{{ page.name }}</v-card-title>
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
  </ContentsFrame>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import ContentsFrame from "~/components/WireFrames/ContentsFrame.vue";
import { useVisiterStore } from "~/stores/visiter";

const visiter = useVisiterStore();
const { getYourName } = storeToRefs(visiter);

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
  visiter.setIsNicknameDialogAlreadyShown(true);
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
  visiter.setIsNicknameDialogAlreadyShown(true);
};

/**----------ルーティングする関数------------ */
const router = useRouter();
const goToPage = (to: string) => {
  router.push(to);
};

/**--------ページ情報の定義---------- */
// ページ情報
const pages = ref([
  { name: "私について", to: "/about", visited: false },
  { name: "技術", to: "/skills", visited: false },
  { name: "プロジェクト一覧", to: "/projects", visited: false },
  { name: "ブログ", to: "/blog", visited: true },
  { name: "連絡", to: "/contact", visited: true },
]);

// 共通: 総ページ数と訪問済み数
const pageStats = computed(() => {
  const total = pages.value.length;
  const visited = pages.value.filter((page) => page.visited).length;
  return { total, visited };
});

// ボタンのバリアントを決定する関数
const btnVariant = computed(() => (index: number) => {
  return pages.value[index].visited ? "outlined" : "flat";
});

// ページ周回の達成率（%）
const calculateAchieveRate = computed(() => {
  return (pageStats.value.visited / pageStats.value.total) * 100;
});

// ページ周回の達成率（表示用）
const showAchieveRate = computed(() => {
  return `${pageStats.value.visited} / ${pageStats.value.total}`;
});

// 全てのページが周回されたかどうか
const allPagesVisited = computed(() => {
  return pageStats.value.visited === pageStats.value.total;
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
    transform: scale(1.02);
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
</style>
