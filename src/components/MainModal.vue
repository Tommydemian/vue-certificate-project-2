<!-- <script setup lang="ts">
import MainButton from "./MainButton.vue";
defineProps<{ isModalOpen: boolean; handleModalOpen: () => void }>();
</script>

<template>
  <Teleport to="body">
    <article
      v-if="isModalOpen"
      class="bg-red-400 w-[400px] h-[400px] fixed-center"
    >
      <p>Hello from the modal!</p>
      <MainButton @button-click="handleModalOpen" button-text="Close" />
    </article>
  </Teleport>
</template>

<style lang="css" scoped></style> -->
