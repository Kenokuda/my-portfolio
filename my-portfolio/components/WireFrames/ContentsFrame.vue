<template>
  <!-- 名前を呼ぶ -->
  <div v-if="yourName" class="greeting">
    <h2>
      <span>{{
        isAllPageVisited ? "全部見てくれてありがとう！" : "ようこそ、"
      }}</span
      ><span class="your-name">{{ yourName }}</span
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

// propsの定義
type Props = {
  isAllPageVisited?: boolean;
  yourName?: string;
  pageTitle: string;
  subTitle?: string;
  prevPath?: string;
  nextPath?: string;
  isHome?: boolean;
};
defineProps<Props>();
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
}

.sub-title {
  color: rgb(var(--v-theme-secondary));
}

.contents-wrap {
  margin-top: 3rem;
}
</style>
