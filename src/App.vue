<template>
  <v-app>
    <v-app-bar app dark color="primary">
      <v-toolbar-title>Madness Academy</v-toolbar-title>
      <v-spacer />
      <v-btn text="text" to="/" class="nav-btn">Home</v-btn>
      <v-btn text="text" to="/gallery" class="nav-btn">Art Gallery</v-btn>
      <v-btn text="text" to="/about" class="nav-btn">About the Artist</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
</script>

<style>
  .nav-btn {
    margin: 1rem;
  }
</style>