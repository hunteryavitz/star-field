<template>
  <v-container class="gallery-root" fluid>
    <v-row class="justify-center">
      <v-col cols="12" md="8" class="text-center">
        <art-gallery-carousel :images="[]"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import ArtGalleryCarousel from "@/components/ArtGalleryCarousel.vue"
// import { ref } from "vue"

// const images = ref([
//   {src: new URL('./assets/image_01.jpg'), alt: "Artwork 1", caption: "Caption for Artwork 1"},
//   {src: new URL('./assets/image_02.jpg'), alt: "Artwork 2", caption: "Caption for Artwork 2"},
//   {src: new URL('./assets/image_03.jpg'), alt: "Artwork 3", caption: "Caption for Artwork 2"},
// ]);
</script>

<style scoped>
.gallery-root {
  background-color: #1e1e2f;
  height: 100vh;
  color: #f5f5f5;
  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
