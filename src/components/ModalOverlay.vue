<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
</script>

<template>
  <div
    v-if="isOpen"
    class="inset-0 fixed bg-gray-900/50 z-20 backdrop-blur-[2px]"
  />
</template>

<style lang="css" scoped></style>
