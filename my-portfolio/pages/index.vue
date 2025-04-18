<template>
  <ContentsFrame
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
            model-value="20"
          ></v-progress-linear>
          <div class="ms-4 text-h6">3/9</div>
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
          <div class="complete-icon"><v-icon>$complete</v-icon></div>
          <v-card-title>{{ page.name }}</v-card-title>
          <v-card-actions><v-btn :to="page.to">表示</v-btn></v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- お名前を聞くダイアログ -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title class="text-h6"
          >ようこそ！<br />あなたの「あだ名」を教えてください</v-card-title
        >
        <v-card-text>
          <v-text-field
            v-model="name"
            label="あだ名"
            outlined
            clearable
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn class="mr-1" @click="cancelBtn()" color="primary"
            >いやかも、、、</v-btn
          >
          <v-btn @click="okBtn()" variant="flat" color="primary">OK</v-btn>
        </v-card-actions>
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
const pages = ref([
  { name: "私について", to: "/about", visited: false },
  { name: "技術", to: "/skills", visited: false },
  { name: "プロジェクト一覧", to: "/projects", visited: false },
  { name: "ブログ", to: "/blog", visited: false },
  { name: "連絡", to: "/contact", visited: false },
]);

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
    color: rgb(var(--v-theme-primary));
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
