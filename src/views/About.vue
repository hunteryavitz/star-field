<template>
  <v-container class="about-page" fluid>
    <v-row class="justify-center">
      <v-col cols="12" md="8" class="text-center">
        <v-avatar size="150" class="custom-avatar">
          <v-img src="./assets/mad_cat_01.png" alt="Artist Ramona Yavitz" class="custom-avatar-img"></v-img>
        </v-avatar>
        <h2 class="artist-name mt-4">Ramona Yavitz</h2>
        <p class="artist-bio mt-2">{{ bio }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

// Example: You can define additional content or state here
const bio = ref("Welcome to my portfolio! I’m a passionate artist who loves creating vibrant, thought-provoking pieces.\n" +
    "Through my art, I explore themes of whimsy and fantasy. Check out my gallery to see more of my work!");
</script>

<style scoped>
.about-page {
  background-color: #1e1e2f;
  height: 100vh;
  color: #f5f5f5;
  padding: 2rem 0;
  align-items: center;
  justify-content: center;
  display: flex;
}

.custom-avatar {
  position: relative;
  border: #1a237e solid 4px;
}

.custom-avatar-img {
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  transform: translateY(10%);
}

.artist-name {
  font-size: 1.8rem;
  font-weight: bold;
}

.artist-bio {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}
</style>
