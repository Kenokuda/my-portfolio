<template>
  <!-- ホームボタン -->
  <v-row class="footer-btn">
    <v-col>
      <v-btn class="mt-4" color="primary" :to="pagePath.HOME" variant="text">
        <span class="prev-text"><v-icon>$prev</v-icon>ホーム</span>
      </v-btn>
    </v-col>

    <!-- 次のページボタン -->
    <v-col class="text-end" v-if="showNextPageBtn">
      <v-btn class="mt-4" color="primary" :to="nextPath" variant="text">
        <span class="next-text"> 次のページ <v-icon>$next</v-icon></span>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { pagePath } from "~/constants/path";

// propsの定義
type Props = {
  nextPath?: string;
};
const props = defineProps<Props>();

// 次のページボタンを表示するかどうか
const showNextPageBtn = computed(() => {
  return props.nextPath !== pagePath.HOME && props.nextPath;
});
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
