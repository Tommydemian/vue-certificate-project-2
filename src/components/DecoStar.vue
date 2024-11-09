<script setup lang="ts">
import StarIcon from "./icons/StarIcon.vue";

defineProps<{ movieRating: number | string }>();
</script>

<template>
  <div
    aria-label="Star with a number represeting the movie rating"
    class="absolute right-4 top-4 flex justify-center items-center"
  >
    <span class="text-gray-800 font-semibold absolute z-10">
      {{ movieRating }}
    </span>
    <StarIcon
      height="3.5em"
      width="3.5em"
      :fill="movieRating ? 'orange' : 'gray'"
    />
  </div>
</template>
