<script lang="ts" setup>
import { computed, ref } from "vue";
import MovieCard from "../components/MovieCard.vue";
import GenreFilter from "../components/GenreFilter.vue";
import { MovieGenres } from "../components/GenreFilter.vue";
import MainButton from "../components/MainButton.vue";
import ModalOverlay from "../components/ModalOverlay.vue";
import MovieForm from "../components/MovieForm.vue";
import MainModal from "../components/MainModal.vue";
import MainContainer from "../components/MainContainer.vue";

import { useMoviesStore } from "../store/movies";
import { useToggle } from "../composables/useToggle";

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
  <main class="relative">
    <MainContainer>
      <div class="flex justify-between items-center">
        <div
          class="flex items-center gap-10 text-gray-50 font-semibold text-xl"
        >
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
        <ModalOverlay :is-open="isModalOpen" />
        <MainModal :is-open="isModalOpen">
          <MovieForm
            :close-modal="toggleModalOpen"
            @new-movie-data="(data) => store.createMovie(data)"
            @cancel="toggleModalOpen"
          />
        </MainModal>
      </div>
    </MainContainer>
  </main>
</template>
