<template>
  <ContentsFrame
    page-title="ブログ"
    sub-title="私のブログです。かなり自由に書いています。"
    :next-path="pagePath.CONTACT"
  >
    <v-container>
      <v-row justify="center">
        <!-- ブログ -->
        <v-col cols="12" sm="6" md="4">
          <v-card class="pa-4 contact-card">
            <v-card-title>
              <v-icon class="me-2" color="primary">mdi-note</v-icon>
              <span class="text-h5 font-weight-bold">note</span>
            </v-card-title>
            <v-card-actions>
              <v-btn
                color="primary"
                outlined
                href="https://note.com/ready_snipe9119"
                target="_blank"
              >
                noteを開く
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="(blog, index) in blogs"
          :key="index"
          cols="12"
          sm="6"
          md="6"
        >
          <v-card class="blog-card" outlined>
            <v-card-title class="text-h6 font-weight-bold">
              {{ blog.title }}
            </v-card-title>
            <v-card-text>
              <p>{{ blog.description }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                :href="blog.toLink"
                target="_blank"
                color="primary"
                outlined
              >
                記事を読む
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </ContentsFrame>
</template>

<script setup lang="ts">
import ContentsFrame from "@/components/WireFrames/ContentsFrame.vue";
import { pagePath } from "~/constants/path";

// ブログデータ
const blogs = [
  {
    title: "「プライバシーに配慮した」生い立ち紹介",
    description: "極力プライバシーに配慮した内容で生い立ちを紹介します。",
    embededLink:
      "https://note.com/ready_snipe9119/n/nb0258ed354b0?sub_rt=share_sb",
    toLink: "https://note.com/ready_snipe9119/n/nb0258ed354b0?sub_rt=share_sb",
  },
  {
    title: "面白い少女漫画１",
    description: "少女漫画を書きたくて。",
    embededLink:
      "https://note.com/ready_snipe9119/n/n2991ae05943a?sub_rt=share_sb",
    toLink: "https://note.com/ready_snipe9119/n/n2991ae05943a?sub_rt=share_sb",
  },
  {
    title: "拝啓、セイントクラウス",
    description: "サンタさんにお手紙を書きました。",
    embededLink:
      "https://note.com/ready_snipe9119/n/n34d09a9fcb7a?sub_rt=share_sb",
    toLink: "https://note.com/ready_snipe9119/n/n34d09a9fcb7a?sub_rt=share_sb",
  },
  {
    title: "風呂キャンセル界隈について",
    description: "風呂キャンセル界隈についての考察。",
    embededLink:
      "https://note.com/ready_snipe9119/n/nddd1a4ff9852?sub_rt=share_sb",
    toLink: "https://note.com/ready_snipe9119/n/nddd1a4ff9852?sub_rt=share_sb",
  },
  {
    title: "和歌山とポーランドに行ってきた",
    description: "和歌山とはなんだろうか",
    embededLink:
      "https://note.com/ready_snipe9119/n/nebb61cb66d83?sub_rt=share_pw",
    toLink: "https://note.com/ready_snipe9119/n/nebb61cb66d83?sub_rt=share_pw",
  },
  {
    title: "速弾きぽく",
    description: "速弾きしてます。",
    embededLink:
      "https://note.com/ready_snipe9119/n/nc7737013426d?sub_rt=share_pw",
    toLink: "https://note.com/ready_snipe9119/n/nc7737013426d?sub_rt=share_pw",
  },
  {
    title: "速弾きぽく",
    description: "速弾きしてます。",
    embededLink:
      "https://note.com/ready_snipe9119/n/nc7737013426d?sub_rt=share_pw",
    toLink: "https://note.com/ready_snipe9119/n/nc7737013426d?sub_rt=share_pw",
  },
  {
    title: "more than your 家賃？",
    description: "ある音楽グループの歌詞について考えてみました。",
    embededLink:
      "https://note.com/ready_snipe9119/n/n4be79c8d36db?sub_rt=share_pw",
    toLink: "https://note.com/ready_snipe9119/n/n4be79c8d36db?sub_rt=share_pw",
  },
];
</script>

<style scoped>
.blog-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.blog-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
.blog-image {
  border-bottom: 1px solid #ddd;
}
</style>
