<template>
  <!-- 名前を呼ぶ -->
  <div
    v-if="isHome"
    :class="['greeting', { 'greeting--all': isAllPageVisited }]"
  >
    <h2>
      <span>{{
        isAllPageVisited ? "全部見てくれてありがとう！" : "ようこそ、"
      }}</span
      ><span class="your-name">{{ getYourName }}</span
      >さん！
    </h2>
  </div>

  <!-- タイトル -->
  <h1 class="page-title">{{ pageTitle }}</h1>
  <h3 class="sub-title">{{ subTitle }}</h3>

  <!-- メインのコンテンツが入ります -->
  <div class="contents-wrap">
    <slot></slot>
  </div>

  <!-- フッター -->
  <FooterBtn v-if="!isHome" :prev-path="prevPath" :next-path="nextPath" />
</template>

<script setup lang="ts">
import FooterBtn from "./FooterBtn.vue";
import { usePageStore } from "@/stores/page";
import { storeToRefs } from "pinia";
import { useVisiterStore } from "~/stores/visiter";

/**-------インスタンス化------- */
// pageのストアをインスタンス化
const page = usePageStore();

// 訪問者に関するストア
const visiter = useVisiterStore();
const { getYourName } = storeToRefs(visiter);

// ページの達成率を更新
const router = useRouter();
router.afterEach(() => {
  // 目的のページに移動したときに visited にする
  page.markVisited(props.pageTitle);
});

// propsの定義
type Props = {
  isAllPageVisited?: boolean;
  pageTitle: string;
  subTitle?: string;
  prevPath?: string;
  nextPath?: string;
  isHome?: boolean;
};
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
// 名前を呼ぶ
.greeting {
  margin-bottom: 5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: rgb(var(--v-theme-onSurface));

  // 名前部分のスタイル
  .your-name {
    color: rgb(var(--v-theme-primary));
    &:hover {
      text-decoration: underline;
    }
  }

  // 全てのページを訪問した時のスタイル
  &--all {
    font-size: 1.8rem;
    background-color: rgb(var(--v-theme-primaryContaienr));
  }
}

// タイトル
.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: rgb(var(--v-theme-onSurface));
  margin-bottom: 1rem;
}

// サブタイトル
.sub-title {
  color: rgb(var(--v-theme-secondary));
}

// コンテンツのラッパー
.contents-wrap {
  margin-top: 5rem;
}
</style>
