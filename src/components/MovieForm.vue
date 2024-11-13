<script setup lang="ts">
import { ref } from "vue";
import { Movie } from "../App.vue";
import { MovieGenres } from "./GenreFilter.vue";

const props = defineProps<{
  closeModal: () => void;
  movie?: Movie;
}>();
const movieGenres: MovieGenres[] = ["Action", "Crime", "Drama"];
const emits = defineEmits<{
  (e: "submit", movie: Movie): void; // Single emit for both create/edit
  (e: "cancel"): void;
}>();

const initState: Movie = {
  id: Math.random(),
  name: "",
  description: "",
  genres: [],
  image: "",
  inTheaters: false,
  rating: 0,
};

const formData = ref<Movie>(props.movie ? { ...props.movie } : initState);

function handleSubmit() {
  emits("submit", formData.value);
  // Reset form
  formData.value = { ...initState };
  // emits("cancel");
}

function handleCancel() {
  // Reset form
  formData.value = { ...initState };
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
      :value="formData.name"
      @input="formData.name = ($event.target as HTMLInputElement).value"
      placeholder="Star Wars: Episode III – Revenge of the Sith"
      class="p-2 text-gray-800 rounded-sm"
    />
    <label class="font-semibold leading-[0] flex items-center" for="description"
      >Description:</label
    >
    <textarea
      name="description"
      id="description"
      :value="formData.description"
      @input="
        formData.description = ($event.target as HTMLTextAreaElement).value
      "
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
      :value="formData.image"
      @input="formData.image = ($event.target as HTMLInputElement).value"
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
          v-model="formData.genres"
          class="cursor-pointer"
          :checked="formData.genres.includes(genre)"
        />
        {{ genre }}
      </label>
    </div>

    <div class="flex items-center justify-normal gap-2">
      <label
        class="font-semibold leading-[0] flex items-center"
        for="is-in-theaters"
        >Is in theaters:</label
      >
      <input
        type="checkbox"
        :checked="formData.inTheaters"
        @change="
          formData.inTheaters = ($event.target as HTMLInputElement).checked
        "
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
      :value="formData.rating"
      @input="
        formData.rating = Number(($event.target as HTMLInputElement).value)
      "
    />

    <div class="flex justify-between items-center">
      <button
        class="py-1 px-2 bg-wine-berry-700 rounded-md"
        type="button"
        @click="handleCancel"
      >
        cancel
      </button>
      <button
        class="py-2 px-4 bg-wine-berry-700 rounded-md font-semibold"
        type="submit"
      >
        Add Movie
      </button>
    </div>
  </form>
</template>
