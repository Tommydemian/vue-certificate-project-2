<script lang="ts" setup>
import { computed, watch, Teleport, Ref } from "vue";
import MovieCard from "./components/MovieCard.vue";
import GenreFilter from "./components/GenreFilter.vue";
import { MovieGenres } from "./components/GenreFilter.vue";
import MainButton from "./components/MainButton.vue";
import ModalOverlay from "./components/ModalOverlay.vue";
import MovieForm from "./components/MovieForm.vue";

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

const newMovieData = ref<Movie>();
console.log(newMovieData);

const movies = ref<Movies>(items);
const filterAgainst = ref<MovieGenres>();

const isModalOpen = ref(false);

function toggleModalOpen() {
  isModalOpen.value = !isModalOpen.value;
}

const moviesFilteredByGenre = computed(() => {
  if (!filterAgainst.value) return movies.value;
  return movies.value.filter((movie) =>
    movie.genres.includes(filterAgainst.value!),
  );
});
</script>

<template>
  <main class="relative max-w-[80rem] mx-auto p-4">
    <GenreFilter
      @selected-genre="
        (selectedGenre) => {
          console.log('Received genre:', selectedGenre);
          filterAgainst = selectedGenre;
        }
      "
    />
    <ul class="grid grid-cols-3 gap-8" role="list">
      <li
        role="listitem"
        :key="movie.id"
        v-for="movie in moviesFilteredByGenre"
        class="w-full h-full"
      >
        <MovieCard :movie="movie" />
      </li>
    </ul>
    <div class="flex justify-center items-center mt-4">
      <MainButton button-text="Add Movie" @button-click="toggleModalOpen" />
      <ModalOverlay :is-modal-open="isModalOpen" />
      <Teleport to="body">
        <article
          v-if="isModalOpen"
          class="grid fixed-center bg-gray-900 rounded-md p-4 text-gray-50 w-[60%] h-fit"
        >
          <MovieForm
            :close-modal="toggleModalOpen"
            @new-movie-data="(data) => (newMovieData = data)"
          />
          <!-- <MainButton @button-click="toggleModalOpen" button-text="Close" /> -->
        </article>
      </Teleport>
    </div>
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

.fixed-center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
}
</style>
