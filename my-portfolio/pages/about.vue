<template>
  <ContentsFrame
    page-title="私について"
    sub-title="私のこれまでの経験を紹介します。"
    :next-path="pagePath.SKILLS"
  >
    <!-- タイムライン -->
    <v-container>
      <div v-if="isMobile">
        <!-- スマホ用タイムライン -->
        <v-row>
          <v-col
            v-for="(event, index) in timelineEvents"
            :key="index"
            cols="12"
          >
            <!-- アイコン -->
            <div v-if="index !== 0" class="d-flex justify-center mb-5">
              <v-icon :color="event.color">mdi-arrow-down</v-icon>
            </div>

            <v-card class="mobile-timeline-card" outlined>
              <v-card-title class="text-h6 font-weight-bold">
                {{ event.date }}
              </v-card-title>
              <v-card-subtitle class="text-subtitle-1">
                {{ event.title }}
              </v-card-subtitle>
              <v-card-text>
                <p>{{ event.description }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div v-else>
        <!-- PC/タブレット用タイムライン -->
        <v-timeline :side="timelineSide">
          <v-timeline-item
            v-for="(event, index) in timelineEvents"
            :key="index"
            :dot-color="event.color"
          >
            <template #opposite>
              <strong>{{ event.date }}</strong>
            </template>
            <v-card>
              <v-card-title class="text-h5 font-weight-bold">
                {{ event.title }}
              </v-card-title>
              <v-card-text class="mt-5">{{ event.description }}</v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </v-container>
  </ContentsFrame>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ContentsFrame from "@/components/WireFrames/ContentsFrame.vue";
import { pagePath } from "~/constants/path";

// タイムラインデータ
const timelineEvents = [
  {
    date: "2000年",
    title: "誕生",
    description:
      "ピアノの先生とシステムエンジニアの両親の家に生まれました。音楽が好きで、デザインや芸術は密かに好きでした。",
    color: "secondary",
  },
  {
    date: "2017年 ~ 2019年",
    title: "バドミントン部",
    description:
      "全国出場経験のあるバドミントン部で活動し、毎日厳しいトレーニングに励みました。",
    color: "secondary",
  },
  {
    date: "2020年",
    title: "「同志社大学」に入学",
    description:
      "社会学を専攻し、教育文化学部で学びました。また、哲学に興味を持ち始めました。",
    color: "secondary",
  },
  {
    date: "2023年",
    title: "学生寮の寮長",
    description:
      "学生寮の寮長として、自治活動の取りまとめを行いました。また、大学生協とコミュニケーションを取りながら、寮の耐震工事の進捗をマネジメントしました。",
    color: "primary",
  },
  {
    date: "2024年",
    title: "卒業",
    description:
      "大学を卒業し、ソフトウェアエンジニアとしてのキャリアをスタートしました。",
    color: "tertiary",
  },
  {
    date: "2024年 7月〜11月",
    title: "モバイルオーダーシステムの開発",
    description:
      "飲食店向けモバイルオーダーシステムの開発をしました。プログラミング未経験ながら、プロトタイプを評価され実装を一任されました。作りながら技術を学び、フロントエンドは最後までほぼ一人で開発を行いました。",
    color: "primary",
  },
  {
    date: "2024年 11月〜3月",
    title: "飲食店向けウェブ管理システムの開発",
    description:
      "飲食店向けウェブ管理システムのリニューアルを行いました。Material Designを参考に、プロトタイプを作成しながらUIデザインをし、フロントエンドの実装を担当しました。",
    color: "primary",
  },
  {
    date: "現在",
    title: "大手銀行向け営業システムの開発",
    description:
      "お客様先のシステム更改プロジェクトで、フロントエンドとJavaを使ったバックエンドを担当しています。",
    color: "secondary",
  },
];

// スマホ・iPad判定
const isMobile = ref(false);
const isTablet = ref(false);
const timelineSide = computed(() => {
  if (isTablet.value) {
    // ipadの場合は右側に表示
    return "end";
  }
});

onMounted(() => {
  const updateDeviceType = () => {
    const width = window.innerWidth;
    isMobile.value = width <= 768;
    isTablet.value = width > 768 && width <= 1024;
  };

  updateDeviceType();
  window.addEventListener("resize", updateDeviceType);

  // クリーンアップ
  onUnmounted(() => {
    window.removeEventListener("resize", updateDeviceType);
  });
});
</script>

<style lang="scss" scoped>
/* タイムラインのスタイル */
.v-timeline {
  margin-bottom: 4rem;
}

.v-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }
}
</style>
