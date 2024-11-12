<script setup lang="ts">
import { ref } from "vue";
import { Movie } from "../App.vue";
import { MovieGenres } from "./GenreFilter.vue";

const movieGenres: MovieGenres[] = ["Action", "Crime", "Drama"];

const newMovieData = ref<Movie>({
  id: Math.random(),
  name: "",
  description: "",
  genres: [],
  image: "",
  inTheaters: false,
  rating: 0,
});

const errors = ref<Record<string, string>>({});

function validateForm() {
  errors.value = {};

  if (!newMovieData.value.name.trim()) {
    errors.value.name = "Name is required";
  }

  if (newMovieData.value.genres.length === 0) {
    errors.value.genres = "Select at least one genre";
  }

  const numberOfErrors = Object.keys(errors.value).length;
  const isValid = numberOfErrors === 0;
  return isValid;
}

const props = defineProps<{ closeModal: () => void }>();

const emits = defineEmits<{
  (e: "new-movie-data", movie: Movie): void;
  (e: "cancel"): void;
}>();

function handleSubmit() {
  emits("new-movie-data", newMovieData.value);
  props.closeModal();
  console.log(newMovieData.value);
}

function handleCancel() {
  newMovieData.value = { ...newMovieData.value, id: Math.random() };
  emits("cancel");
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="p-4 flex flex-col gap-8">
    <label class="font-semibold leading-[0] flex items-center" for="name"
      >Name:</label
    >
    <input
      type="text"
      name="name"
      id="name"
      required
      v-model="newMovieData.name"
      placeholder="Star Wars: Episode III – Revenge of the Sith"
      class="p-2 text-gray-800 rounded-sm"
    />
    <label class="font-semibold leading-[0] flex items-center" for="description"
      >Description:</label
    >
    <textarea
      name="description"
      id="description"
      v-model="newMovieData.description"
      placeholder="Is a 2005 American epic space opera film that is the sequel to The Phantom Menace (1999) and Attack of the Clones (2002). It is the sixth film in the Star Wars film series, the third installment in the Star Wars prequel trilogy, and third chronological chapter of the 'Skywalker Saga'"
      class="p-2 text-gray-800 rounded-sm"
    >
      is a 2005 American epic space opera film that is the sequel to The Phantom Menace (1999) and Attack of the Clones (2002). It is the sixth film in the Star Wars film series, the third installment in the Star Wars prequel trilogy, and third chronological chapter of the "Skywalker Saga"
    </textarea>
    <label class="font-semibold leading-[0] flex items-center" for="image"
      >Image:</label
    >
    <input
      type="text"
      id="image"
      name="image"
      v-model="newMovieData.image"
      placeholder="https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg/220px-Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg"
      class="p-2 text-gray-800 rounded-sm"
    />
    <label class="font-semibold leading-[0] flex items-center" for="genre"
      >Genre</label
    >
    <div class="flex gap-4 items-center">
      <label
        v-for="genre in movieGenres"
        :key="genre"
        class="flex gap-2 cursor-pointer text-gray-50"
      >
        <input
          type="checkbox"
          :value="genre"
          v-model="newMovieData.genres"
          class="cursor-pointer"
        />
        {{ genre }}
      </label>
    </div>

    <!-- <div class="flex items-center gap-2">
      <p :key="selectedGenre" v-for="selectedGenre in newMovieData.genres">
        {{ selectedGenre }}
      </p>
    </div> -->

    <div class="flex items-center justify-normal gap-2">
      <label
        class="font-semibold leading-[0] flex items-center"
        for="is-in-theaters"
        >Is in theaters:</label
      >
      <input
        type="checkbox"
        v-model="newMovieData.inTheaters"
        class="rounded-sm"
      />
    </div>

    <label class="font-semibold leading-[0] flex items-center" for="rating"
      >Rating:</label
    >
    <input
      type="number"
      id="rating"
      name="rating"
      step="1"
      max="5"
      class="text-gray-800"
      v-model="newMovieData.rating"
    />

    <div class="flex justify-between items-center">
      <button type="button" @click="handleCancel">cancel</button>
      <button type="submit">Add Movie</button>
    </div>
  </form>
</template>
