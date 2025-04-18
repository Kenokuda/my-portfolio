<template>
  <!-- 戻るボタン -->
  <v-row class="footer-btn">
    <v-col>
      <v-btn class="mt-4" color="primary" :to="{ path: '/' }" variant="text">
        <span class="prev-text"><v-icon>$prev</v-icon>戻る</span>
      </v-btn>
    </v-col>

    <v-col class="text-end">
      <v-btn class="mt-4" color="primary" :to="{ path: '/' }" variant="text">
        <span class="next-text">次のページ<v-icon>$next</v-icon></span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
// propsの定義
type Props = {
  prevPath?: string;
  nextPath?: string;
};
defineProps<Props>();
</script>

<style lang="scss" scoped>
.footer-btn {
  margin-bottom: 2rem;
}

.prev-text,
.next-text {
  font-size: 1.1rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
}
</style>
