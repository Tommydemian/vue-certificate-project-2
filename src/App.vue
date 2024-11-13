<script lang="ts" setup>
import { computed, watch, Teleport, Ref, ref } from "vue";
import MovieCard from "./components/MovieCard.vue";
import GenreFilter from "./components/GenreFilter.vue";
import { MovieGenres } from "./components/GenreFilter.vue";
import MainButton from "./components/MainButton.vue";
import ModalOverlay from "./components/ModalOverlay.vue";
import MovieForm from "./components/MovieForm.vue";

import { useMoviesStore } from "./store/movies";
import { useToggle } from "./composables/useToggle";

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

const store = useMoviesStore();
const filterAgainst = ref<MovieGenres>();

// modal state and toggle
const { state: isModalOpen, toggle: toggleModalOpen } = useToggle(false);

// filtered Movies Computed
const filteredMovies = computed(() =>
  store.moviesFilteredByGenre(filterAgainst.value),
);
</script>

<template>
  <main class="relative max-w-[80rem] mx-auto p-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-10 text-gray-50 font-semibold text-xl">
        <p>Total Movies: {{ store.totalMovies }}</p>
        <span>/</span>
        <p>Average Rating: {{ store.avgRating.toFixed(1) }}</p>
      </div>
      <GenreFilter
        @selected-genre="
          (selectedGenre) => {
            console.log('Received genre:', selectedGenre);
            filterAgainst = selectedGenre;
          }
        "
      />
    </div>
    <ul class="grid grid-cols-3 gap-8 mt-10" role="list">
      <li
        role="listitem"
        :key="movie.id"
        v-for="movie in filteredMovies"
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
          class="grid fixed-center bg-gray-900 rounded-md p-4 text-gray-50 w-[60%] h-fit border border-gray-300"
        >
          <MovieForm
            :close-modal="toggleModalOpen"
            @new-movie-data="(data) => store.createMovie(data)"
            @cancel="toggleModalOpen"
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
