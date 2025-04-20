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

      <!-- TODO:言語トグルボタン -->
      <!-- <v-btn icon @click="toggleLocale" title="言語切り替え">
        <v-icon>mdi-translate</v-icon>
      </v-btn> -->

      <!-- テーマトグルボタン -->
      <v-btn icon @click="toggleTheme" :title="themeLabel">
        <v-icon>{{ themeIcon }}</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- ナビゲーションドロワー -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-item
          :to="pagePath.HOME"
          link
          :class="[
            { 'active-list-item': $route.path === pagePath.HOME },
            'list-item',
          ]"
        >
          <v-list-item-title class="font-weight-bold"
            >ホーム</v-list-item-title
          ></v-list-item
        >

        <template v-for="p in page.pages" :key="page.to">
          <v-list-item
            :to="p.to"
            link
            :class="[{ 'active-list-item': $route.path === p.to }, 'list-item']"
          >
            <v-list-item-title class="font-weight-bold">{{
              p.title
            }}</v-list-item-title></v-list-item
          >
        </template>
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
import { pagePath } from "~/constants/path";
import { usePageStore } from "~/stores/page";

/**-------ストアのインスタンス化--------- */
const page = usePageStore();

/**-----言語切り替え----------- */
const { locale, setLocale } = useI18n();
const toggleLocale = () => {
  const newLocale = locale.value === "ja" ? "en" : "ja";
  setLocale(newLocale);
};

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
// ドロワーの開閉アニメーション
.icon-wrapper {
  display: inline-block;
  transition: transform 0.3s ease;
}

// ドロワー開閉時のアイコン回転
.icon-wrapper.rotated {
  transform: rotate(90deg);
}

// ドロワーのリストアイテム
.list-item {
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  .v-list-item-title {
    font-size: 1.1rem;
    font-weight: bold;
    color: rgb(var(--v-theme-onSurface));
  }
}

// 選択中のドロワーアイテム
.active-list-item {
  background-color: rgb(var(--v-theme-secondaryContainer));
}
</style>
