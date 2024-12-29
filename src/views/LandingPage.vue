<template>
  <div class="landing-page">
    <v-container class="text-center">
      <v-card class="content">
        <v-card-title class="title">{{ message }}</v-card-title>
        <v-card-text>
          <p class="sub-title">
            Things are about to get a little crazy.
          </p>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue"
const message = ref("Welcome to Madness Academy")
</script>

<style scoped>
.landing-page {
  background-image: url("@/assets/mad_cat_bg_01.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #F5F5F5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.landing-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.content {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  color: #F5F5F5;
  z-index: 2;
}

.title {
  font-size: 2.5rem;
  margin-top: 1rem;
}

.sub-title {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
