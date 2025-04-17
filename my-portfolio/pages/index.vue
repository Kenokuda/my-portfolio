<template>
  <v-row>
    <v-col cols="4" v-for="(page, index) in pages" :key="index">
      <v-card @click="goToPage(page.to)">
        <v-card-title>{{ page.name }}</v-card-title>
        <v-card-actions><v-btn :to="page.to">表示</v-btn></v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
// ルーティングする関数
const router = useRouter();
const goToPage = (to: string) => {
  router.push(to);
};

// ページ情報の定義
const pages = ref([
  { name: "私について", to: "/about" },
  { name: "技術", to: "/skills" },
  { name: "プロジェクト一覧", to: "/projects" },
  { name: "ブログ", to: "/blog" },
  { name: "連絡", to: "/contact" },
]);
</script>

<style lang="scss" scoped>
// カードコンポーネント
.v-card {
  transition: transform 0.3s ease, background-color 0.3s ease;
  &:hover {
    background-color: rgb(var(--v-theme-primaryContainer));
    transform: scale(1.02);
  }
}
.v-card-title {
  margin-bottom: 8px;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
