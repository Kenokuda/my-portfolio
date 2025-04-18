<template>
  <ContentsFrame page-title="技術一覧" sub-title="私が使える技術を紹介します。">
    <!-- 技術一覧 -->
    <v-row class="mb-5">
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          class="pa-4 skill-card"
          v-tooltip:top="skill.tooltip"
          :color="skill.color"
        >
          <v-card-title>
            <v-icon class="me-2">{{ skill.icon }}</v-icon>
            <span class="text-h5 font-weight-bold">{{ skill.name }}</span>
          </v-card-title>
          <v-card-text>
            <p>{{ skill.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </ContentsFrame>
</template>

<script setup lang="ts">
import ContentsFrame from "~/components/WireFrames/ContentsFrame.vue";

// 技術一覧のデータ
const skills = [
  {
    name: "HTML",
    icon: "mdi-language-html5",
    description: "Webページの構造を作成するためのマークアップ言語。",
    tooltip: "画面構成の基本！",
    color: "primaryContainer",
  },
  {
    name: "CSS",
    icon: "mdi-language-css3",
    description: "Webページのスタイルをデザインするためのスタイルシート言語。",
    tooltip: "SCSSも使えます！",
    color: "primaryContainer",
  },
  {
    name: "JavaScript",
    icon: "mdi-language-javascript",
    description: "Webページに動的な機能を追加するためのプログラミング言語。",
    tooltip: "jQueryも少し使えます！",
    color: "primaryContainer",
  },
  {
    name: "Vue.js",
    icon: "mdi-vuejs",
    description:
      "モダンなWebアプリケーションを構築するためのJavaScriptフレームワーク。",
    tooltip: "結構使える！モバイルオーダーアプリもVue.jsで作成しました！",
    color: "primaryContainer",
  },
  {
    name: "Vuetify",
    icon: "mdi-vuetify",
    description: "Vue.js向けのMaterial Designコンポーネントフレームワーク。",
    tooltip: "結構使える！プロトタイプもお手のもの！",
    color: "primaryContainer",
  },
  {
    name: "TypeScript",
    icon: "mdi-language-typescript",
    description: "JavaScriptに型付けを追加したプログラミング言語。",
    tooltip: "結構使える！静的型付けで安心！",
    color: "primaryContainer",
  },
  {
    name: "Git",
    icon: "mdi-git",
    description: "バージョン管理システム。コードの履歴を管理します。",
    tooltip: "Gitflowで普通に使えます！",
    color: "primaryContainer",
  },
  {
    name: "Node.js",
    icon: "mdi-nodejs",
    description: "サーバーサイドのJavaScriptランタイム環境。",
    tooltip: "ダウンロードして使う！",
    color: "secondaryContainer",
  },
  {
    name: "Java",
    icon: "mdi-language-java",
    description:
      "汎用的なオブジェクト指向プログラミング言語。企業システムなどで広く使われています。",
    tooltip: "基礎文法とオブジェクト指向はバッチリ！",
    color: "tertiaryContainer",
  },
  {
    name: "Python",
    icon: "mdi-language-python",
    description:
      "シンプルで読みやすい文法が特徴のプログラミング言語。AIやデータ分析などでも人気。",
    tooltip: "基本文法・ライブラリに触れた程度！Python基礎検定持ってます!",
    color: "tertiaryContainer",
  },
  {
    name: "その他",
    icon: "mdi-tools",
    description:
      "Figma、Davinci Resolve、Blender、Unity、Unreal Engine、Affinity Designer...などを触ったことがあります。（まだ研鑽が足りません、、、）",
    tooltip: "Figmaは業務で使ってます！",
    color: "surfaceContainer",
  },
];
</script>

<style scoped>
.skill-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.skill-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
</style>
