<template>
  <!-- 名前を呼ぶ -->
  <div v-if="yourName" class="greeting">
    <h2>
      ようこそ、<span class="your-name">{{ yourName }}</span
      >さん！
    </h2>
  </div>

  <!-- パンくずリスト -->
  <v-breadcrumbs v-if="!isHome" :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
  <h1>{{ pageTitle }}</h1>
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
