<script setup lang="ts">
import { computed, defineAsyncComponent, hydrateOnVisible } from "vue";

import GenrePill from "./GenrePill.vue";
import StarRating from "./StarRating.vue";
import DecoStar from "./DecoStar.vue";
import MovieCardOperationsButton from "./MovieCardOperationsButton.vue";
import TrashIcon from "./icons/TrashIcon.vue";
import EditIcon from "./icons/EditIcon.vue";
import EyeIcon from "./icons/EyeIcon.vue";
import MovieForm from "./MovieForm.vue";
import ModalOverlay from "./ModalOverlay.vue";
import MainModal from "./MainModal.vue";
// const AsyncModal = defineAsyncComponent({
//   loader: () => import("./MainModal.vue"),
//   hydrate: hydrateOnVisible(),
// });

import { Movie } from "../App.vue";
import { useMoviesStore } from "../store/movies";
import { useToggle } from "../composables/useToggle";

const props = defineProps<{ movie: Movie }>();

const store = useMoviesStore();
const { state: isModalOpen, toggle: toggleModalOpen } = useToggle(false);

const movieRating = computed(() =>
  props.movie.rating ? props.movie.rating : "-",
);

function handleSubmit(updatedMovie: Movie) {
  store.updateMovie(updatedMovie);
  toggleModalOpen();
}
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
    <div class="flex justify-between items-center flex-wrap">
      <StarRating
        :rating="movie.rating"
        @update-rating="(newRating) => (movie.rating = newRating)"
      />
      <div aria-label="movie card operations." class="flex gap-[0.75rem] mt-2">
        <MovieCardOperationsButton
          operation-type="delete-movie"
          @delete-movie="store.removeMovie(movie.id)"
        >
          <TrashIcon />
        </MovieCardOperationsButton>

        <MovieCardOperationsButton
          operation-type="edit-movie"
          @edit-movie="toggleModalOpen"
        >
          <EditIcon />
        </MovieCardOperationsButton>

        <MovieCardOperationsButton :linkto="true" :id="movie.id">
          <EyeIcon />
        </MovieCardOperationsButton>
      </div>
    </div>
    <!-- <ModalOverlay :is-open="isModalOpen" /> -->
    <MainModal :is-open="isModalOpen">
      <MovieForm
        :close-modal="toggleModalOpen"
        :movie="movie"
        @submit="(movieData) => handleSubmit(movieData)"
        @cancel="toggleModalOpen"
      />
    </MainModal>
  </article>
</template>
