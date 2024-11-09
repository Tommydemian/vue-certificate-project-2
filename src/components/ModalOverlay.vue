<script setup lang="ts">
defineProps<{ isModalOpen: boolean }>();
</script>

<template>
  <div v-if="isModalOpen" class="modal-overlay"></div>
</template>

<style lang="css" scoped>
.modal-overlay {
  transition:
    background-color 2s ease-in-out,
    backdrop-filter 2s ease-in-out;
}
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(5px);
  inset: 0;
  position: absolute;
  z-index: 20;
}
</style>
