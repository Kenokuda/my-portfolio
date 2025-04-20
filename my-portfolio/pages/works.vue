<template>
  <ContentsFrame
    page-title="作品"
    :sub-title="`${visiter.getYourName}さんに、私が作ってきたものを紹介します。`"
    prev-path="/skills"
    next-path="/blog"
  >
    <v-container>
      <div class="works-container">
        <h2 class="works-title">プロジェクト</h2>
        <v-row>
          <v-col
            v-for="(project, index) in projects"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card class="works-card" outlined>
              <v-img
                :src="project.image"
                :alt="project.title"
                class="works-image"
              ></v-img>
              <v-card-title class="mt-4 text-h5 font-weight-bold">
                {{ project.title }}
              </v-card-title>
              <v-card-text>
                <p>{{ project.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  color="primary"
                  outlined
                >
                  プロジェクトを見る
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- 写真セクション -->
      <div class="works-container photo">
        <h2 class="works-title">写真</h2>
        <v-row>
          <v-col
            v-for="(photo, index) in photos"
            :key="index"
            cols="12"
            sm="6"
            md="4"
          >
            <v-img :src="photo.src" class="works-image"></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </ContentsFrame>
</template>

<script setup lang="ts">
import ContentsFrame from "@/components/WireFrames/ContentsFrame.vue";
import { useVisiterStore } from "@/stores/visiter";
// 画像のインポート
import mobileOrderImage from "@/assets/images/mainimg_mobileOrder.png";
import nuriTshirtImage from "@/assets/images/IMG_5925.jpg";
import kyotoTowerImage from "@/assets/images/IMG_7233.png";
import treeImage from "@/assets/images/IMG_7543.png";
import lizardImage from "@/assets/images/IMG_7621.jpg";
import catAloneImage from "@/assets/images/IMG_7622.jpg";
import catSleepImage from "@/assets/images/IMG_7623.jpg";

// ストアの初期化
const visiter = useVisiterStore();

// プロジェクトデータ
const projects = [
  {
    title: "モバイルオーダーシステム",
    description:
      "飲食店向けのモバイルオーダーシステムを開発しました。Vue.jsとVuetifyを使用。",
    image: mobileOrderImage, // プロジェクトの画像URL
    link: "https://www.nova-system.com/product/or_products/mobileorder/", // プロジェクトのリンク
  },
  {
    title: "ウェブ管理システム",
    description:
      "飲食店向けのウェブ管理システムをリニューアルしました。Material Designを採用し、シンプルで使いやすいUIを実現。",
  },
  {
    title: "ポートフォリオサイト",
    description:
      "自分のポートフォリオサイトを作成しました。Vue.jsとVuetifyを使用。今見てるサイトです！",
    link: "https://example.com/portfolio",
  },
];

// 写真データ
const photos = [
  { id: 1, src: nuriTshirtImage },
  { id: 2, src: kyotoTowerImage },
  { id: 3, src: treeImage },
  { id: 4, src: lizardImage },
  { id: 5, src: catAloneImage },
  { id: 6, src: catSleepImage },
];
</script>

<style lang="scss" scoped>
.works-container {
  .works-title {
    margin-bottom: 2rem;
    color: rgb(var(--v-theme-onSurface));
    font-size: 1.75rem;
  }

  &.photo {
    margin-top: 4rem;
  }
}
.works-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  }

  .v-card-title,
  .v-card-text {
    color: rgb(var(--v-theme-onSurface));
  }

  .v-card-text {
    line-height: 1.8;
  }
}
</style>
