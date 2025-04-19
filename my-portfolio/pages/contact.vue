<template>
  <ContentsFrame
    page-title="連絡"
    sub-title="ご連絡は以下の方法でお願いします。"
    prev-path="/blog"
    next-path="/"
  >
    <v-container>
      <v-row justify="center">
        <!-- メール -->
        <v-col cols="12" sm="6" md="4">
          <v-card class="pa-4 contact-card">
            <v-card-title>
              <v-icon class="me-2" color="primary">mdi-email</v-icon>
              <span class="text-h5 font-weight-bold">メール</span>
            </v-card-title>
            <v-card-text>
              <p>以下のメールアドレスにご連絡ください。</p>
              <p class="text-body-2">contact.poku@gmail.com</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                outlined
                href="mailto:contact.poku@gmail.com"
                target="_blank"
              >
                メールを送る
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- LinkedIn -->
        <v-col cols="12" sm="6" md="4">
          <v-card class="pa-4 contact-card">
            <v-card-title>
              <v-icon class="me-2" color="indigo">mdi-linkedin</v-icon>
              <span class="text-h5 font-weight-bold">LinkedIn</span>
            </v-card-title>
            <v-card-text>
              <p>LinkedInでご連絡ください。</p>
              <p class="text-body-2">LinkedInアカウント</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="indigo"
                outlined
                href="https://www.linkedin.com/in/%E8%B3%A2%E6%96%97-%E5%A5%A5%E7%94%B0-324070361/"
                target="_blank"
              >
                LinkedInを開く
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </ContentsFrame>
</template>

<script setup lang="ts">
import ContentsFrame from "~/components/WireFrames/ContentsFrame.vue";
</script>

<style scoped>
.contact-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.contact-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
</style>
