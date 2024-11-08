<script setup lang="ts">
import Star from "./icons/StarIcon.vue";
defineProps<{ onClickStars: () => void }>();
</script>

<template>
  <button @click="onClickStars">
    <Star />
  </button>
</template>

<style lang="css" scoped></style>
