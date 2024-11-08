<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: "#ccc",
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    viewBox="0 0 24 24"
    class="star-icon"
  >
    <path
      :fill="fill"
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
    />
  </svg>
</template>

<style lang="css">
.star-icon path {
  transition: fill 0.3s ease-in-out;
}
</style>
