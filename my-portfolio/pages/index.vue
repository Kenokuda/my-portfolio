<template>
  <v-row v-for="(page, index) in pages" :key="index">
    <v-col>
      <v-card>
        <v-card-title>{{ page.name }}</v-card-title>
        <v-card-actions><v-btn></v-btn></v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const pages = [
  { name: "私について", to: "/about" },
  { name: "ブログ", to: "/about" },
  { name: "連絡", to: "/about" },
  { name: "技術", to: "/about" },
  { name: "プロジェクト一覧", to: "/about" },
];
</script>
