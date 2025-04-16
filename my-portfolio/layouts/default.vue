<script setup lang="ts">
import WireFrame from "~/components/WireFrames/WireFrame.vue";
</script>

<template>
  <v-app>
    <!-- メインコンテンツ -->
    <WireFrame>
      <slot />
    </WireFrame>

    <!-- フッター -->
    <AppFooter />
  </v-app>
</template>
