<script setup lang="ts">
import { computed } from "vue";

import GenrePill from "./GenrePill.vue";
import StarRating from "./StarRating.vue";
import DecoStar from "./DecoStar.vue";

import { Movie } from "../App.vue";
import { useMoviesStore } from "../store/movies";

const props = defineProps<{ movie: Movie }>();

const store = useMoviesStore();

const movieRating = computed(() =>
  props.movie.rating ? props.movie.rating : "-",
);
</script>

<template>
  <article
    class="relative bg-white p-4 rounded-md flow-content w-full h-full grid"
  >
    <div class="w-full h-[500px]">
      <DecoStar :movie-rating="movieRating" />

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
    <div class="flex justify-between items-center">
      <StarRating
        :rating="movie.rating"
        @update-rating="(newRating) => (movie.rating = newRating)"
      />
      <div
        class="rounded-full bg-slate-200 p-2 cursor-pointer border border-slate-500 transition-colors hover:bg-slate-100"
        @click="store.removeMovie(movie.id)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.7em"
          height="1.7em"
          viewBox="0 0 24 24"
          class="transition-colors"
        >
          <path
            fill="none"
            stroke="#A3A3A3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
          />
        </svg>
      </div>
    </div>
  </article>
</template>
