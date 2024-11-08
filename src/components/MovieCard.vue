<script setup lang="ts">
import GenrePill from "./GenrePill.vue";
import { defineProps } from "vue";
import { Movie } from "../App.vue";
import StarRating from "./StarRating.vue";

const props = defineProps<{ movie: Movie }>();
</script>

<template>
  <article
    class="relative bg-white p-4 rounded-md flow-content w-full h-full grid"
  >
    <div class="w-full h-[500px]">
      <img
        class="w-full h-full object-cover mx-auto"
        :src="movie.image"
        :alt="movie.name"
      />
    </div>
    <h2 class="text-xl font-semibold leading-[1]">{{ movie.name }}</h2>
    <div class="flex gap-4">
      <GenrePill :movie="movie" />
    </div>
    <p class="mb-4">{{ movie.description }}</p>
    <StarRating
      :rating="movie.rating"
      @update-rating="(newRating) => (movie.rating = newRating)"
    />
  </article>
</template>
