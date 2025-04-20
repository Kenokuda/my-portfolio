<template>
  <ContentsFrame
    page-title="ブログ"
    sub-title="私のブログです。かなり自由に書いています。"
    prev-path="/works"
    next-path="/contact"
  >
    <v-container>
      <v-row>
        <v-col
          v-for="(blog, index) in blogs"
          :key="index"
          cols="12"
          sm="6"
          md="6"
        >
          <v-card class="blog-card" outlined>
            <iframe
              class="note-embed"
              :src="blog.embededLink"
              style="
                border: 0;
                display: block;
                max-width: 99%;
                width: 494px;
                padding: 0px;
                margin: 10px 0px;
                position: static;
                visibility: visible;
              "
            ></iframe>
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

// ブログデータ
const blogs = [
  {
    title: "新卒社会人が教えるVue.js",
    description: "Vue.jsやCSS、Typescriptなどについて解説した記事です。",
    embededLink: "https://note.com/embed/notes/ncb637b2551ed",
    toLink: "https://note.com/ready_snipe9119/n/ncb637b2551ed",
  },
  {
    title: "新卒社会人が教えるwebデザイン",
    description:
      "Material DesignやVuetify、Webデザインの歴史を解説した記事です。",
    embededLink: "https://note.com/embed/notes/n04c2a16a515b",
    toLink: "https://note.com/ready_snipe9119/n/n04c2a16a515b",
  },
  {
    title: "京都アートフェア2025に行ってきた！",
    description:
      "「京都アートフェア2025」に行ってきた感想や、絵画の見方を解説した記事です。",
    embededLink: "https://note.com/embed/notes/n9cfb611fadea",
    toLink: "https://note.com/ready_snipe9119/n/n9cfb611fadea",
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
