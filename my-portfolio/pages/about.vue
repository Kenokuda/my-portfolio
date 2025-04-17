<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <v-card-title class="text-h5 font-weight-bold"
            >私について</v-card-title
          >
          <v-card-text class="mt-5">
            <p>以下は、私のこれまでの経験を時系列でまとめたものです。</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- タイムライン -->
    <v-timeline>
      <v-timeline-item
        v-for="(event, index) in timelineEvents"
        :key="index"
        :color="event.color"
        :icon="event.icon"
      >
        <template #opposite>
          <strong>{{ event.date }}</strong>
        </template>
        <v-card>
          <v-card-title class="text-h6 font-weight-bold">{{
            event.title
          }}</v-card-title>
          <v-card-text class="mt-5">{{ event.description }}</v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4 mt-4">
          <v-card-title class="text-h5 font-weight-bold">現在</v-card-title>
          <v-card-text class="mt-5">
            <p>
              お客様先のシステム更改プロジェクトで、フロントエンドとJavaを使ったバックエンドを担当しています。
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 戻るボタン -->
    <v-row justify="start">
      <v-col cols="12" md="8">
        <v-btn class="mt-4" color="primary" :to="{ path: '/' }" variant="text">
          <v-icon>$prev</v-icon>戻る
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const timelineEvents = [
  {
    date: "2000年",
    title: "誕生",
    description:
      "ピアノの先生の家に生まれました。音楽が好きで、デザインや芸術は密かに好きでした。",
    color: "secondary",
    icon: "mdi-laptop",
  },
  {
    date: "2017年 ~ 2019年",
    title: "バドミントン部",
    description:
      "全国出場経験のあるバドミントン部で活動し、毎日厳しいトレーニングに励みました。",
    color: "secondary",
    icon: "mdi-laptop",
  },
  {
    date: "2020年",
    title: "「同志社大学」に入学",
    description:
      "社会学を専攻し、教育文化学部で学びました。また、哲学に興味を持ち始めました。",
    color: "onSurface",
    icon: "mdi-school",
  },
  {
    date: "2023年",
    title: "学生寮の寮長",
    description:
      "学生寮の寮長として、自治活動の取りまとめを行いました。また、大学生協とコミュニケーションを取りながら、寮の耐震工事の進捗をマネジメントしました。",
    color: "secondary",
    icon: "mdi-laptop",
  },
  {
    date: "2024年",
    title: "卒業",
    description:
      "大学を卒業し、ソフトウェアエンジニアとしてのキャリアをスタートしました。",
    color: "warning",
    icon: "mdi-graduation-cap",
  },
  {
    date: "2024年 7月〜11月",
    title: "モバイルオーダーシステムの開発",
    description:
      "飲食店向けモバイルオーダーシステムの開発をしました。プログラミング未経験ながら、プロトタイプを評価され実装を一任されました。作りながら技術を学び、フロントエンドは最後までほぼ一人で開発を行いました。",
    color: "warning",
    icon: "mdi-graduation-cap",
  },
  {
    date: "2024年 11月〜3月",
    title: "飲食店向けウェブ管理システムの開発",
    description:
      "飲食店向けウェブ管理システムのリニューアルを行いました。Material Designを参考に、プロトタイプを作成しながらUIデザインをし、フロントエンドの実装を担当しました。",
    color: "warning",
    icon: "mdi-graduation-cap",
  },
];
</script>

<style scoped>
.v-card {
  margin-bottom: 16px;
}
</style>
