<script setup lang="ts">
import { ref, watch } from "vue";
// defineProps<{ movieGenres: string[] }>();
export type MovieGenres = "Action" | "Crime" | "Drama";

const emit = defineEmits<{
  (e: "selected-genre", selectedGenre: MovieGenres): void;
}>();

const movieGenres: MovieGenres[] = ["Action", "Crime", "Drama"];

const selectedGenre = ref<MovieGenres>("Action");
watch(selectedGenre, (newVal) => {
  console.log(newVal, "selected-genre");
});
console.log(selectedGenre.value);
</script>

<template>
  <label for="genres">Filter by genre:</label>

  <select
    name="genres"
    id="genres"
    v-model="selectedGenre"
    @change="emit('selected-genre', selectedGenre)"
  >
    <option v-for="genre in movieGenres" :value="genre">
      {{ genre }}
    </option>
  </select>
</template>

<style lang="css" scoped></style>
