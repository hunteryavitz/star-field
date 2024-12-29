<script setup>
import ArtGalleryCarousel from "@/components/ArtGalleryCarousel.vue";

const artImages = [
  { src: './assets/image_01.jpg', alt: "Artwork 1", caption: "Water sculpture" },
  { src: './assets/image_02.jpg', alt: "Artwork 2", caption: "Serene ocean" },
  { src: './assets/image_03.jpg', alt: "Artwork 3", caption: "Art gallery" },
];
</script>

<template>
  <v-app>
    <v-main>
      <v-card-text>
        <h1>Art Gallery</h1>
        <p>View some of our featured art pieces below.</p>
      </v-card-text>
      <ArtGalleryCarousel :images="artImages" />
    </v-main>
  </v-app>
</template>
