<script setup lang="ts">
import { Movie } from "../App.vue";

defineProps<{ movie: Movie }>();
</script>

<template>
  <div v-for="genre in movie.genres">
    <p class="text-white font-medium bg-purple-800 py-2 px-4 rounded-full">
      {{ genre }}
    </p>
  </div>
</template>

<style lang="css" scoped></style>
