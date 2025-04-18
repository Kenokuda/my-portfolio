<template>
  <v-layout class="rounded rounded-md border">
    <!-- アプリケーションバー -->
    <v-app-bar elevation="0">
      <v-btn class="drawer-btn" icon @click="toggleDrawer">
        <div :class="['icon-wrapper', { rotated: drawer }]">
          <v-icon>
            {{ drawer ? "mdi-close" : "mdi-menu" }}
          </v-icon>
        </div></v-btn
      >

      <v-spacer />

      <!-- テーマトグルボタン -->
      <v-btn icon @click="toggleTheme" :title="themeLabel">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- ナビゲーションドロワー -->
    <v-navigation-drawer v-model="drawer" app>
      <template #prepend>
        <v-list-item>
          <v-list-item-title class="text-h6">メニュー</v-list-item-title>
        </v-list-item>
      </template>
      <v-list nav>
        <v-list-item title="Navigation drawer" link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- メインコンテンツ -->
    <v-main class="d-flex align-center justify-center">
      <v-container>
        <slot></slot>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";

/**-------Vuetifyのテーマコントロール--------------- */
// インスタンス化
const theme = useTheme();

// システムのダークモード設定を取得（メディアクエリを使う）
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// isDarkThemeの初期値をシステム設定に合わせる
const isDarkTheme = ref(prefersDark);

// アイコンとラベルをリアクティブに切り替え
const themeIcon = computed(() =>
  isDarkTheme.value ? "mdi-weather-night" : "mdi-white-balance-sunny"
);
const themeLabel = computed(() =>
  isDarkTheme.value ? "ダークテーマ" : "ライトテーマ"
);

// テーマを切り替える関数
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
};

// テーマ変更を反映
watch(
  isDarkTheme,
  (newVal) => {
    theme.global.name.value = newVal ? "dark" : "light";
  },
  { immediate: true }
);

/**---------ナビゲーションドロワー--------- */
const drawer = ref(false);
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style lang="scss" scoped>
// ツールバー タイトル
.v-toolbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(var(--v-theme-onSurface));
}

// ドロワーの開閉アニメーション
.icon-wrapper {
  display: inline-block;
  transition: transform 0.3s ease;
}

.icon-wrapper.rotated {
  transform: rotate(90deg);
}
</style>
