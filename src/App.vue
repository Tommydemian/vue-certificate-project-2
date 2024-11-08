<script lang="ts" setup>
import MovieCard from "./components/MovieCard.vue";

export type Movie = {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  genres: string[];
  inTheaters: boolean;
};

export type Movies = Movie[];

import { ref } from "vue";
import { items } from "./movies.json";

const movies = ref<Movies>(items);

console.log(items);
/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <main class="max-w-[80rem] mx-auto p-4">
    relaxed
    <ul class="grid grid-cols-3 gap-8" role="list">
      <li
        role="listitem"
        :key="movie.id"
        v-for="movie in movies"
        class="w-full h-full"
      >
        <MovieCard :movie="movie" />
      </li>
    </ul>
  </main>
</template>

<style lang="css">
.img-ratio {
  aspect-ratio: 16/9;
}
.flow-content > * {
  margin-bottom: 0.75rem;
}
.flow-content > *:last-child {
  margin-bottom: 0;
}
</style>
