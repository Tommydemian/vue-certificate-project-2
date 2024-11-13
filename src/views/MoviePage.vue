<script setup lang="ts">
// import { useRoute } from "vue-router";
import { useMoviesStore } from "../store/movies";
import MainContainer from "../components/MainContainer.vue";
import GenrePill from "../components/GenrePill.vue";
import { Movie } from "./TheHome.vue";
import StarRating from "../components/StarRating.vue";

const props = defineProps<{ id: string }>();

// const route = useRoute();
const store = useMoviesStore();

const movie: Movie = store.getMovie(Number(props.id));
</script>

<template>
  <section>
    <MainContainer class="flex justify-center items-center">
      <article
        aria-label="Movie details"
        class="flex flex-col justify-center w-fit flow-content mt-20 bg-slate-50 p-4 rounded-sm"
      >
        <div class="w-[20rem] h-full m-auto mb-4">
          <img :src="movie.image" :alt="movie.name" class="cover" />
        </div>
        <div class="flex gap-2">
          <GenrePill :movie="movie" />
        </div>
        <p class="max-w-[40ch]">{{ movie.description }}</p>
        <StarRating :rating="movie.rating" />

        <p class="italic">
          {{ movie.inTheaters ? "Curerntly in theaters" : "Not in theaters" }}
        </p>
      </article>
    </MainContainer>
  </section>
</template>
