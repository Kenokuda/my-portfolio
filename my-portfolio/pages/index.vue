<template>
  <v-row>
    <v-col cols="4" v-for="(page, index) in pages" :key="index">
      <v-card>
        <v-card-title>{{ page.name }}</v-card-title>
        <v-card-actions><v-btn :to="page.to">表示</v-btn></v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const pages = ref([
  { name: "私について", to: "/about" },
  { name: "ブログ", to: "/blog" },
  { name: "連絡", to: "/contact" },
  { name: "技術", to: "/skills" },
  { name: "プロジェクト一覧", to: "/projects" },
]);
</script>

<style lang="scss">
.v-card {
  background-color: rgb(var(--my-sys-color-primary));
}
</style>
