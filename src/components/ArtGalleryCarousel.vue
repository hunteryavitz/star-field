<template>
  <v-container>
    <v-carousel cycle hide-delimiters :height="carouselHeight">
      <v-carousel-item v-for="(image, index) in images" :key="index" class="v-carousel-item">
        <v-img :src="image.src" class="fill-height v-img" :alt="image.alt || `Art piece ${index + 1}`" />
        <div v-if="image.caption" class="custom-caption">
          {{ image.caption }}
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
import { computed } from "vue"
import { useDisplay } from "vuetify"

defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [
      {src: new URL('./assets/image_01.jpg'), alt: "Artwork 1", caption: "Caption for Artwork 1"},
      {src: new URL('./assets/image_02.jpg'), alt: "Artwork 2", caption: "Caption for Artwork 2"},
      {src: new URL('./assets/image_03.jpg'), alt: "Artwork 3", caption: "Caption for Artwork 2"},
    ],
  },
});

const { smAndDown } = useDisplay();

const carouselHeight = computed(() => (smAndDown.value ? "300px" : "400px"));
</script>

<style scoped>
.v-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-img {
  object-fit: cover;
}

.custom-caption {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}
</style>
